class Scene1 extends Phaser.Scene{
    constructor(){
        super({key:'Scene1'})
    }
    preload(){
        this.load.audio('vava_sound', ['./audio/vava_sound.mp3'])
    }
    create(){
    //   alert('created') 
    this.kidlaugh=this.sound.add('vava_sound',{
        loop:false

      })
      this.kidlaugh.play()
      
    }
    update(){
        console.log('I am updating')
    }

}