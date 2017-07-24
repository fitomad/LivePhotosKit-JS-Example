// Creamos el LivePhotos Player.

const player = LivePhotosKit.Player(document.getElementById('livephotos-layer'));
player.photoSrc = 'images/live/waves.jpg';
player.videoSrc = 'images/live/waves.mov';

//
// Eventos
//

player.addEventListener('canplay', evt => {
    console.log('LivePhotos player listo', evt);
});

player.addEventListener('error', evt => {
    if (typeof evt.detail.errorCode === 'number') {
        switch (evt.detail.errorCode) {
            case LivePhotosKit.Errors.IMAGE_FAILED_TO_LOAD:
                // Do something
                break;
            case LivePhotosKit.Errors.VIDEO_FAILED_TO_LOAD:
                // Do something
                break;
        }
    } else {
        console.error(evt.detail.error);
    }
});

player.addEventListener('ended', evt => {
    console.log('LivePhotos player ha terminado de reproducir el vídeo', evt);
});

player.addEventListener('videoload', evt => {
    console.log('Vídeo cargado', evt);
});

player.addEventListener('photoload', evt => {
    console.log('Foto cargada', evt);
});

// Mostramos los controles
player.showsNativeControls = true;

// ¿Cómo vamos a hacer la transición entre foto y vídeo?
// También afecta a la duración total de la reproducción
player.playbackStyle = LivePhotosKit.PlaybackStyle.FULL; // Completo
//player.playbackStyle = LivePhotosKit.PlaybackStyle.HINT; // Parte

//
// También podemos controlar la repdroducción del vídeo
// con estas funciones.
//

//player.play(); // reproduce
//player.pause(); // pausa
//player.toggle(); // alterna entre play y pause
//player.stop(); // detine la reproducción
