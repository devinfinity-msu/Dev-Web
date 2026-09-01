(function () {
    // ---- config ----
    var INTRO_MS = 1550;        // time for the falling-drop + splash + reveal intro (keep in sync with style.css)
    var TOTAL_MS = 8100;        // loader duration AFTER the intro (intro + this ≈ 10s total)

    var REDIRECT_TO = 'home.html'; // change this to your home page filename

    function startLoader() {

        // ---- typewriter tagline ----
        var full = 'Build. Innovate. Inspire.';
        var tagEl = document.getElementById('tagline');
        var i = 0;
        function typeStep() {
            if (i <= full.length) {
                tagEl.textContent = full.slice(0, i);
                i++;
                setTimeout(typeStep, 55);
            } else {
                tagEl.classList.remove('typing');
            }
        }
        setTimeout(typeStep, 200);

        // ---- infinity path progress ----
        var progressPath = document.getElementById('progress');
        var comet = document.getElementById('comet');
        var pctEl = document.getElementById('pct');
        var statusEl = document.getElementById('statusMsg');
        var logoWrap = document.getElementById('logoWrap');

        var length = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = length;
        progressPath.style.strokeDashoffset = length;

        var messages = [
            { at: 0, text: 'Booting the club' },
            { at: 0.25, text: 'Compiling ideas' },
            { at: 0.5, text: 'Linking the team' },
            { at: 0.75, text: 'Polishing pixels' },
            { at: 0.95, text: 'Ready' }
        ];
        var shown = 0;

        var start = null;
        var loadFraction = 0.94; // draws to ~94% during the animation, snaps to 100% at the end
        var sparksFired = false;

        // ---- completion sparkle burst ----
        var sparkColors = ['#8b5cf6', '#22d3ee', '#d946ef', '#f6b93b'];
        function fireSparks(container, count) {
            for (var s = 0; s < count; s++) {
                (function () {
                    var spark = document.createElement('span');
                    spark.className = 'spark';
                    spark.style.background = sparkColors[s % sparkColors.length];
                    spark.style.color = sparkColors[s % sparkColors.length];
                    spark.style.transform = 'translate(-50%, -50%) scale(0)';
                    spark.style.opacity = '1';
                    container.appendChild(spark);

                    var angle = (Math.PI * 2 * s) / count + Math.random() * 0.4;
                    var dist = 70 + Math.random() * 60;
                    var dx = Math.cos(angle) * dist;
                    var dy = Math.sin(angle) * dist;

                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            spark.style.transform = 'translate(' + (dx - 3.5) + 'px, ' + (dy - 3.5) + 'px) scale(1.4)';
                            spark.style.opacity = '0';
                        });
                    });

                    setTimeout(function () {
                        if (spark.parentNode) spark.parentNode.removeChild(spark);
                    }, 750);
                })();
            }
        }

        function frame(ts) {
            if (start === null) start = ts;
            var elapsed = ts - start;
            var t = Math.min(elapsed / TOTAL_MS, 1);

            var eased = t < 1 ? 1 - Math.pow(1 - t, 2) : 1; // ease-out
            var drawFraction = Math.min(eased, 1) * loadFraction + (t >= 0.98 ? (1 - loadFraction) : 0);

            progressPath.style.strokeDashoffset = String(length * (1 - drawFraction));

            var point = progressPath.getPointAtLength(length * drawFraction);
            comet.setAttribute('cx', point.x);
            comet.setAttribute('cy', point.y);

            var pctVal = Math.round(drawFraction * 100);
            pctEl.textContent = pctVal + '%';

            while (shown < messages.length - 1 && t >= messages[shown + 1].at) {
                shown++;
                statusEl.style.opacity = 0;
                setTimeout(function (msg) {
                    statusEl.textContent = msg;
                    statusEl.style.opacity = 1;
                }, 160, messages[shown].text);
            }

            if (t < 1) {
                requestAnimationFrame(frame);
            } else {
                pctEl.textContent = '100%';
                statusEl.textContent = 'Ready';
                if (!sparksFired) {
                    sparksFired = true;
                    fireSparks(logoWrap, 12);
                }
                setTimeout(function () {
                    window.location.href = REDIRECT_TO;
                }, 450);
            }
        }
        requestAnimationFrame(frame);
    }

    setTimeout(startLoader, INTRO_MS);
})();