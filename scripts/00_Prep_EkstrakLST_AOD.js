// =========================================================================
// EKSTRAKSI SUHU (LST) & POLUSI (AOD)
// =========================================================================

// Panggil Satelit Landsat 8 untuk Suhu (LST) & Filter Tahun 2023
var landsat = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
  .filterBounds(table)
  .filterDate('2023-01-01', '2023-12-31')
  .select('ST_B10'); // ST_B10 adalah band khusus Suhu Permukaan

// Hitung nilai tengah (Median) dan ubah ke Celcius
var lst_image = landsat.median().multiply(0.00341802).add(149.0).subtract(273.15).rename('LST');

// Panggil Satelit MODIS untuk Kualitas Udara (AOD) & Filter Tahun 2023
var modis = ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
  .filterBounds(table)
  .filterDate('2023-01-01', '2023-12-31')
  .select('Optical_Depth_047'); // Band ketebalan aerosol

var aod_image = modis.median().multiply(0.001).rename('AOD');

// Gabungkan Suhu dan Polusi
var data_lingkungan = ee.Image.cat([lst_image, aod_image]);

// Proses Zonal Statistics
var ekstrak_lingkungan = data_lingkungan.reduceRegions({
  collection: table, 
  reducer: ee.Reducer.mean(),
  scale: 30 // Resolusi satelit Landsat
});

// Kirim Hasil Akhir ke Google Drive!
Export.table.toDrive({
  collection: ekstrak_lingkungan,
  description: 'Ekstrak_Final',
  folder: 'Online_Assesment_GISACT',
  fileFormat: 'GeoJSON'
});