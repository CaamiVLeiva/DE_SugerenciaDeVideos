let VideoModule = (function () {
    function mostrarVideo(url, id) {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    return {
        cargarVideo: function (url, id) {
            mostrarVideo(url, id);
        },
    };
})();

class Multimedia {
    #url;

    constructor(url) {
        this.#url = url;
    }

    get url() {
        return this.#url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        VideoModule.cargarVideo(this.url, this.id);
    }

    setInicio(tiempo) {
        const nuevaUrl = `${this.url}&amp;start=${tiempo}`;
        VideoModule.cargarVideo(nuevaUrl, this.id);
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/Uy_RvIogzzs?si=HCsBDj7rK8Gz23C9&amp;start=633", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/DLET_u31M4M?si=naLsUn1dHlcG_g2t&amp;start=2", "pelicula");
const serie = new Reproductor("https://www.youtube.com/embed/mAmZBKEvqjk?si=BV8t9YIWok7YT77f&amp;start=2", "serie");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

musica.setInicio(60); 
