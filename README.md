# GeospatialEngineer_Nadhia-Ferlia-Fara_TA2

# Analisis Prioritas Pengembangan Solar PV (Building-Level) ☀️🏙️
**Technical Assessment - Geospatial Data Engineer**

## 📌 Deskripsi Proyek
Repositori ini berisi keseluruhan *source code*, data spasial turunan, peta, dan laporan untuk analisis penentuan prioritas lokasi instalasi Solar PV (PLTS Atap) pada tingkat bangunan. Analisis ini menggunakan pendekatan *data-driven* untuk mengidentifikasi poligon bangunan yang memberikan dampak gabungan paling optimal secara energi, ekonomi, dan lingkungan ekologis.

## ⚙️ Metodologi Utama
Analisis spasial diselesaikan melalui kerangka kerja terintegrasi:
1. **Google Earth Engine (GEE):** Ekstraksi *Big Data* raster menggunakan *Zonal Statistics* untuk mengukur Iradiasi Matahari (GHI, DNI), Suhu Permukaan (LST/Urban Heat Island), dan Kualitas Udara (AOD/Aerosol).
2. **Python & GeoPandas:** Pra-pemrosesan vektor, perhitungan *yield* energi standar NREL, evaluasi kelayakan finansial (*Payback Period*), dan standardisasi indeks (*Min-Max Scaling* & *Z-Score*).
3. **Machine Learning (K-Means Clustering):** Segmentasi tanpa pengawasan (*unsupervised*) untuk membagi puluhan ribu bangunan ke dalam 3 klaster hierarki.
4. **Spatial Multi-Criteria Evaluation (SMCE):** Pembobotan akhir (Energi 30%, ROI 30%, Lingkungan 25%, Logistik 15%) untuk menetapkan *Priority Score* (0-1).

## 📂 Struktur Repositori
- 📄 `Laporan_Analisis_SolarPV.pdf`: Laporan komprehensif memuat metodologi, asumsi, dan kesimpulan.
- 📁 `scripts/`: Memuat *script* JavaScript (GEE) dan Python Jupyter Notebook (`.ipynb`).
- 📁 `data_output/`: Memuat data final berformat `.geojson` (spasial) dan `.csv` (tabel ranking prioritas).
- 📁 `maps_visualizations/`: Memuat peta *layouting* akhir yang diproduksi menggunakan QGIS.

## 🛠️ Tech Stack & Tools
* **Data Sources:** OpenStreetMap (Overpass API), Global Solar Atlas, Landsat 8 (Thermal), MODIS (MCD19A2).
* **Processing:** Google Earth Engine (JavaScript API), Python (GeoPandas, Scikit-Learn, Pandas).
* **Cartography:** QGIS 3.x

---
*Developed for PT. GISACT INNOVATION TECHNOLOGY - Technical Assessment (July 2026).*
