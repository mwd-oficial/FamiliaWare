let r = document.getElementById('r')
let rgbr = document.getElementById('rgbr')
let g = document.getElementById('g')
let rgbg = document.getElementById('rgbg')
let b = document.getElementById('b')
let rgbb = document.getElementById('rgbb')
let res = document.getElementById('res')
let rgbres = document.getElementById('rgbres')
let vermelho = false
let verde = false
let azul = false
let magenta = false
let amarelo = false
let ciano = false
let branco = false
let divqcor = document.getElementById('divqcor')
let cor = document.getElementById('qcor')
let qcor = 1
let f = document.getElementById('f')
let todas = document.getElementById('todas')

function red() {
    if (r.style.backgroundColor == 'red') {
        rgbr.innerHTML = 'rgb(0, 0, 0)'
        res.innerHTML = 'Preto'
        r.style.backgroundColor = 'black'
        r.style.color = 'white'
        r.style.border = '3px solid white'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), black, rgb(173, 216, 230))'
        res.style.color = 'white'
        if (g.style.backgroundColor == 'rgb(0, 255, 0)' && b.style.backgroundColor == 'blue') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(0, 255, 255), rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(0, 255, 255)'
            res.innerHTML = 'Ciano'
            res.style.color = 'black'
            res.style.transitionDuration = '0.3s'
            if (!ciano) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                ciano = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else if (r.style.backgroundColor != 'red' && g.style.backgroundColor == 'rgb(0, 255, 0)') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(0, 255, 0), rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(0, 255, 0)'
            res.innerHTML = 'Verde'
            res.style.color = 'black'
            res.style.transitionDuration = '0.3s'
            if (!verde) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                verde = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else if (r.style.backgroundColor != 'red' && b.style.backgroundColor == 'blue') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), blue, rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(0, 0, 255)'
            res.innerHTML = 'Azul'
            res.style.color = 'white'

            res.style.transitionDuration = '0.3s'
            if (!azul) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                azul = true;
            }

            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else {
            res.style.backgroundColor = 'black'
            rgbres.innerHTML = 'rgb(0, 0, 0)'
        }

    } else if (g.style.backgroundColor == 'rgb(0, 255, 0)' && b.style.backgroundColor == 'blue') {
        r.style.backgroundColor = 'red'
        rgbr.innerHTML = 'rgb(255, 0, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), white, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 255, 255)'
        res.innerHTML = 'Branco'
        r.style.color = 'black'
        r.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!branco) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            branco = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else if (g.style.backgroundColor == 'rgb(0, 255, 0)') {
        r.style.backgroundColor = 'red'
        rgbr.innerHTML = 'rgb(255, 0, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), yellow, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 255, 0)'
        res.innerHTML = 'Amarelo'
        r.style.color = 'black'
        r.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!amarelo) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            amarelo = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else if (b.style.backgroundColor == 'blue') {
        r.style.backgroundColor = 'red'
        rgbr.innerHTML = 'rgb(255, 0, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(255, 0, 255), rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 0, 255)'
        res.innerHTML = 'Magenta'
        r.style.color = 'black'
        r.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!magenta) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            magenta = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else {
        r.style.backgroundColor = 'red'
        rgbr.innerHTML = 'rgb(255, 0, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), red, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 0, 0)'
        res.innerHTML = 'Vermelho'
        r.style.color = 'black'
        r.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!vermelho) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            vermelho = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    }
}

function green() {
    if (g.style.backgroundColor == 'rgb(0, 255, 0)') {
        g.style.backgroundColor = 'black'
        rgbg.innerHTML = 'rgb(0, 0, 0)'
        res.innerHTML = 'Preto'
        g.style.color = 'white'
        g.style.border = '3px solid white'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), black, rgb(173, 216, 230))'
        res.style.color = 'white'
        if (r.style.backgroundColor == 'red' && b.style.backgroundColor == 'blue') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(255, 0, 255), rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(255, 0, 255)'
            res.innerHTML = 'Magenta'
            res.style.color = 'black'
            res.style.transitionDuration = '0.3s'
            if (!magenta) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                magenta = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else if (g.style.backgroundColor != 'rgb(0, 255, 0)' && r.style.backgroundColor == 'red') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), red, rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(255, 0, 0)'
            res.innerHTML = 'Vermelho'
            res.style.color = 'black'

            res.style.transitionDuration = '0.3s'
            if (!vermelho) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                vermelho = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else if (g.style.backgroundColor != 'rgb(0, 255, 0)' && b.style.backgroundColor == 'blue') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), blue, rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(0, 0, 255)'
            res.innerHTML = 'Azul'
            res.style.color = 'white'

            res.style.transitionDuration = '0.3s'
            if (!azul) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                azul = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else {
            res.style.backgroundColor = 'black'
            rgbres.innerHTML = 'rgb(0, 0 , 0)'
        }

    } else if (r.style.backgroundColor == 'red' && b.style.backgroundColor == 'blue') {
        g.style.backgroundColor = 'rgb(0, 255, 0)'
        rgbg.innerHTML = 'rgb(0, 255, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), white, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 255, 255)'
        res.innerHTML = 'Branco'
        g.style.color = 'black'
        g.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!branco) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            branco = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else if (r.style.backgroundColor == 'red') {
        g.style.backgroundColor = 'rgb(0, 255, 0)'
        rgbg.innerHTML = 'rgb(0, 255, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), yellow, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 255, 0)'
        res.innerHTML = 'Amarelo'
        g.style.color = 'black'
        g.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!amarelo) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            amarelo = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else if (b.style.backgroundColor == 'blue') {
        g.style.backgroundColor = 'rgb(0, 255, 0)'
        rgbg.innerHTML = 'rgb(0, 255, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(0, 255, 255), rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(0, 255, 255)'
        res.innerHTML = 'Ciano'
        g.style.color = 'black'
        g.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!ciano) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            ciano = true;

            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        }
    } else {
        g.style.backgroundColor = 'rgb(0, 255, 0)'
        rgbg.innerHTML = 'rgb(0, 255, 0)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(0, 255, 0), rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(0, 255, 0)'
        res.innerHTML = 'Verde'
        g.style.color = 'black'
        g.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!verde) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            verde = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    }
}


function blue() {
    if (b.style.backgroundColor == 'blue') {
        b.style.backgroundColor = 'black'
        rgbb.innerHTML = 'rgb(0, 0, 0)'
        res.innerHTML = 'Preto'
        b.style.color = 'white'
        b.style.border = '3px solid white'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), black, rgb(173, 216, 230))'
        res.style.color = 'white'
        if (r.style.backgroundColor == 'red' && g.style.backgroundColor == 'rgb(0, 255, 0)') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), yellow, rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(255, 255, 0)'
            res.innerHTML = 'Amarelo'
            res.style.color = 'black'

            res.style.transitionDuration = '0.3s'
            if (!amarelo) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                amarelo = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else if (b.style.backgroundColor != 'blue' && r.style.backgroundColor == 'red') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), red, rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(255, 0, 0)'
            res.innerHTML = 'Vermelho'
            res.style.color = 'black'

            res.style.transitionDuration = '0.3s'
            if (!vermelho) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                vermelho = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else if (b.style.backgroundColor != 'blue' && g.style.backgroundColor == 'rgb(0, 255, 0)') {
            res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(0, 255, 0), rgb(173, 216, 230))'
            rgbres.innerHTML = 'rgb(0, 255, 0)'
            res.innerHTML = 'Verde'
            res.style.color = 'black'

            res.style.transitionDuration = '0.3s'
            if (!verde) {
                qcor = qcor + 1
                cor.innerHTML = qcor
                verde = true;
            }
            if (qcor == 8) {
                todas.style.display = 'flex'
                f.style.display = 'block'
                qcor = qcor + 1
            }

        } else {
            res.style.backgroundColor = 'black'
            rgbres.innerHTML = 'rgb(0, 0, 0)'
        }

    } else if (r.style.backgroundColor == 'red' && g.style.backgroundColor == 'rgb(0, 255, 0)') {
        b.style.backgroundColor = 'blue'
        rgbb.innerHTML = 'rgb(0, 0, 255)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), white, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 255, 255)'
        res.innerHTML = 'Branco'
        b.style.color = 'white'
        b.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!branco) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            branco = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else if (r.style.backgroundColor == 'red') {
        b.style.backgroundColor = 'blue'
        rgbb.innerHTML = 'rgb(0, 0, 255)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(255, 0, 255), rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(255, 0, 255)'
        res.innerHTML = 'Magenta'
        b.style.color = 'white'
        b.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!magenta) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            magenta = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else if (g.style.backgroundColor == 'rgb(0, 255, 0)') {
        b.style.backgroundColor = 'blue'
        rgbb.innerHTML = 'rgb(0, 0, 255)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), rgb(0, 255, 255), rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(0, 255, 255)'
        res.innerHTML = 'Ciano'
        b.style.color = 'white'
        b.style.border = '3px solid black'
        res.style.color = 'black'
        res.style.transitionDuration = '0.3s'
        if (!ciano) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            ciano = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    } else {
        b.style.backgroundColor = 'blue'
        rgbb.innerHTML = 'rgb(0, 0, 255)'
        res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), blue, rgb(173, 216, 230))'
        rgbres.innerHTML = 'rgb(0, 0, 255)'
        res.innerHTML = 'Azul'
        b.style.color = 'white'
        b.style.border = '3px solid black'
        res.style.color = 'white'
        res.style.transitionDuration = '0.3s'
        if (!azul) {
            qcor = qcor + 1
            cor.innerHTML = qcor
            azul = true;
        }
        if (qcor == 8) {
            todas.style.display = 'flex'
            f.style.display = 'block'
            qcor = qcor + 1
        }

    }
}

function limpcor() {
    todas.style.display = 'none'
    f.style.display = 'none'
}

function atualizar() {
    vermelho = false
    verde = false
    azul = false
    magenta = false
    amarelo = false
    ciano = false
    branco = false
    qcor = 1
    cor.innerHTML = qcor
    res.style.backgroundImage = 'linear-gradient(to right, rgb(173, 216, 230), black, rgb(173, 216, 230))'
    res.style.color = 'white'
    res.innerHTML = 'Preto'
    rgbres.innerHTML = 'rgb(0, 0, 0)'
    r.style.color = 'white'
    g.style.color = 'white'
    b.style.color = 'white'
    rgbr.innerHTML = 'rgb(0, 0, 0)'
    rgbg.innerHTML = 'rgb(0, 0, 0)'
    rgbb.innerHTML = 'rgb(0, 0, 0)'
    r.style.border = '3px solid white'
    g.style.border = '3px solid white'
    b.style.border = '3px solid white'
    r.style.backgroundColor = 'black'
    g.style.backgroundColor = 'black'
    b.style.backgroundColor = 'black'
}


var malpri1 = document.getElementById('malpri1')
var malpri2 = document.getElementById('malpri2')
var malpri3 = document.getElementById('malpri3')
var malpri4 = document.getElementById('malpri4')
var malpri5 = document.getElementById('malpri5')
var malpri6 = document.getElementById('malpri6')
var malpri7 = document.getElementById('malpri7')
var malpri8 = document.getElementById('malpri8')
var malpri9 = document.getElementById('malpri9')
var malpri10 = document.getElementById('malpri10')
var malpri11 = document.getElementById('malpri11')
var malpriex = document.getElementById('malpriex')

function ver() {

    malpri1.style.display = 'block'
    setTimeout(function () {
        malpri2.style.display = 'block'
    }, 100);
    setTimeout(function () {
        malpri3.style.display = 'block'
    }, 200);
    setTimeout(function () {
        malpri4.style.display = 'block'
    }, 300);
    setTimeout(function () {
        malpri5.style.display = 'block'
    }, 400);
    setTimeout(function () {
        malpri6.style.display = 'block'
    }, 500);
    setTimeout(function () {
        malpri7.style.display = 'block'
    }, 600);
    setTimeout(function () {
        malpri8.style.display = 'block'
    }, 700);
    setTimeout(function () {
        malpri9.style.display = 'block'
    }, 800);
    setTimeout(function () {
        malpri10.style.display = 'block'
    }, 900);
    setTimeout(function () {
        malpri11.style.display = 'block'
    }, 1000);

}

var px = document.getElementById('px')
var pnx = document.getElementById('pnx')
function prox() {
    malpriex.style.display = 'block'
    px.style.display = 'block'
    pnx.style.display = 'none'
}

function pro() {
    malpriex.style.display = 'block'
    pnx.style.display = 'block'
    px.style.display = 'none'
}

function limp() {

    malpri11.style.display = 'none'
    malpri10.style.display = 'none'
    malpri4.style.display = 'none'
    malpri9.style.display = 'none'
    malpri8.style.display = 'none'
    malpri7.style.display = 'none'
    malpri6.style.display = 'none'
    malpri5.style.display = 'none'
    malpri3.style.display = 'none'
    malpri2.style.display = 'none'
    malpri1.style.display = 'none'
    malpriex.style.display = 'none'
}
var malpricell = document.getElementById('malpricell')
var cellcentro = document.getElementById('cellcentro')
var cellcentro2 = document.getElementById('cellcentro2')
var malpriexcell = document.getElementById('malpriexcell')
var pxcell = document.getElementById('pxcell')
var pnxcell = document.getElementById('pnxcell')
function vercell() {
    malpricell.style.display = 'block'
    cellcentro.style.display = 'block'
}

function procell() {
    malpricell.style.display = 'none'
    malpriexcell.style.display = 'block'
    cellcentro.style.display = 'none'
    cellcentro2.style.display = 'block'
    pnxcell.style.display = 'block'
    pxcell.style.display = 'none'
}

function proxcell() {
    malpricell.style.display = 'none'
    malpriexcell.style.display = 'block'
    cellcentro.style.display = 'none'
    cellcentro2.style.display = 'block'
    pxcell.style.display = 'block'
    pnxcell.style.display = 'none'
}

function limpcell() {
    malpriexcell.style.display = 'none'
    cellcentro2.style.display = 'none'
}
