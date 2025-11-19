const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const inputImage = path.join(__dirname, '..', 'public', 'charles-photo.png');
  const outputDir = path.join(__dirname, '..', 'app');

  // Vérifier que l'image source existe
  if (!fs.existsSync(inputImage)) {
    console.error('Image source non trouvée:', inputImage);
    process.exit(1);
  }

  try {
    // Générer l'icône principale (32x32) avec un crop circulaire centré sur le visage
    await sharp(inputImage)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'icon.png'));

    console.log('✓ Icône principale générée: app/icon.png (32x32)');

    // Générer l'icône Apple (180x180) avec un crop circulaire centré sur le visage
    await sharp(inputImage)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'apple-icon.png'));

    console.log('✓ Icône Apple générée: app/apple-icon.png (180x180)');

    // Générer également un favicon.ico (optionnel mais utile pour la compatibilité)
    await sharp(inputImage)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .toFormat('png')
      .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('✓ Favicon généré: app/favicon.ico (32x32)');

    console.log('\n✅ Toutes les icônes ont été générées avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes:', error);
    process.exit(1);
  }
}

generateIcons();
