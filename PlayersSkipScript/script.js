'use strict';

/ ==UserScript==
    // @name        Autonext - anilibria.tv
    // @namespace   gipoScripts
    // @match       *://*.anilibria.tv/release/*
    // @grant       none
    // @version     1.1
    // @author      gipohub
    // @description ������������� �������� ��������� ����� ��� PlayerJS ������.
    // ==/UserScript==
    (async () => {
        while (!window.hasOwnProperty("player")) // ����� ���������������� �� �����, ��������� ��� � ����� �� �����
            await new Promise(resolve => setTimeout(resolve, 1000));
        window.player.api("autonext", 1)//�������� �����������
    })();