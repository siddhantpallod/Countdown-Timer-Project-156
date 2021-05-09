AFRAME.registerComponent('game', {
    schema:{
        elementId: {type: 'string', default: '#coin1'}
    },

    init: function(){
        var duration = 120
        var timer = document.querySelector('#timer')
        this.startTimer(duration, timer)
    },

    update: function(){
        this.isCollided(this.data.elementId)
    },

    startTimer: function(duration, timer){
        var minutes, seconds;

        setInterval(() => {
            if(duration >= 0){
                minutes = parseInt(duration / 60)
                seconds = parseInt(duration % 60)

                if(minutes < 10){
                    minutes = '0' + minutes
                }
                if(seconds < 10){
                    seconds = '0' + seconds
                }

                timer.setAttribute('text', {
                    value: minutes + ':' + seconds
                })

                duration -= 1
            }
            else{
                this.gameOver()
            }
        }, 1000)
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener('collide', e => {
            if(elementId.includes('#coin')){
                element.setAttribute('visible', false)
                this.updateScore()
                this.updateTargets()
            }
            else {
                this.gameOver()
            }
        })
    },

    updateTargets : function(){
        var element = document.querySelector('#targets')
        var count = element.getAttribute('text').value
        var currentTargets = parseInt(count)
        currentTargets -= 1;
        element.setAttribute('text', {
            value: currentTargets
        })
    },

    updateScore: function(){
        var element = document.querySelector('#score')
        var score = element.getAttribute('text').value
        var currentScore = parseInt(score)
        currentScore += 50
        element.setAttribute('text', {
            value: currentScore
        })
    },

    gameOver: function(){
        var element = document.querySelector('#game_over')
        var entity = document.querySelector('#diver-model')
        element.setAttribute('visible', true)
        entity.setAttribute('visible', false)
    }
})