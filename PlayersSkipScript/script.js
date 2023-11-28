'use strict';

/ ==UserScript==
    // @name        Autonext - anilibria.tv
    // @namespace   gipoScripts
    // @match       *://*.anilibria.tv/release/*
    // @grant       none
    // @version     1.1
    // @author      gipohub
    // @description Автоматически включает следующую серию для PlayerJS плеера.
    // ==/UserScript==
    (async () => {
        while (!window.hasOwnProperty("player")) // Плеер инициализируется не сразу, проверяем раз в какое то время
            await new Promise(resolve => setTimeout(resolve, 1000));
        window.player.api("autonext", 1)//Включить автопригрыш
    })();