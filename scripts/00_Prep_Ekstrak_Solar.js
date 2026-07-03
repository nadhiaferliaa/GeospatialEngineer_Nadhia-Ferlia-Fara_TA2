// Memanggil Data GHI dan DNI dari Global Solar Atlas
var ghi = ee.Image("projects/sat-io/open-datasets/global_solar_atlas/ghi_LTAy_AvgDailyTotals").rename('GHI');
var dni = ee.Image("projects/sat-io/open-datasets/global_solar_atlas/dni_LTAy_AvgDailyTotals").rename('DNI');

// Menggabungkan 
var data_solar = ee.Image.cat([ghi, dni]);

// Proses Zonal Statistics
var ekstrak_solar = data_solar.reduceRegions({
  collection: table,
  reducer: ee.Reducer.mean(),
  scale: 10
});

// Export ke Google Drive
Export.table.toDrive({
  collection: ekstrak_solar,
  description: 'Ekstrak_Solar_PV',
  folder: 'Online_Assesment_GISACT',
  fileFormat: 'GeoJSON'
});