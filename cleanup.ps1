# cleanup.ps1 — limpieza one-shot del proyecto
# Ejecutar desde C:\Projects\IA_landing en PowerShell:
#   .\cleanup.ps1
# (o copiar y pegar las líneas a mano)

Write-Host "Limpiando carpetas dist-* (excepto 'dist')..." -ForegroundColor Cyan
Get-ChildItem -Directory -Filter "dist-*" | Where-Object { $_.Name -ne "dist" } | Remove-Item -Recurse -Force

Write-Host "Limpiando timestamps de vite..." -ForegroundColor Cyan
Get-ChildItem -File -Filter "vite.config.js.timestamp-*" | Remove-Item -Force

Write-Host "Borrando componentes huerfanos del primer intento..." -ForegroundColor Cyan
$dead = @(
  "Benefits.jsx", "Benefits.css",
  "CTA.jsx",      "CTA.css",
  "Footer.jsx",   "Footer.css",
  "Instructors.jsx", "Instructors.css",
  "LogoCloud.jsx",   "LogoCloud.css",
  "Program.jsx",     "Program.css",
  "Testimonials.jsx","Testimonials.css"
)
foreach ($f in $dead) {
  $path = "src\components\$f"
  if (Test-Path $path) { Remove-Item $path -Force }
}

Write-Host "" -ForegroundColor Green
Write-Host "Listo!" -ForegroundColor Green
Write-Host "Resumen:"
$distCount = (Get-ChildItem -Directory -Filter "dist-*" | Where-Object { $_.Name -ne "dist" }).Count
$timestampCount = (Get-ChildItem -File -Filter "vite.config.js.timestamp-*").Count
Write-Host "  - Carpetas dist-* restantes: $distCount (deberia ser 0)"
Write-Host "  - Timestamps de vite restantes: $timestampCount (deberia ser 0)"
Write-Host "  - Componentes huerfanos eliminados"
