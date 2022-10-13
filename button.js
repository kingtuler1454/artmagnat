window.addEventListener("scroll",function() {


        if (window.scrollY <0.6*document.getElementById('biography').clientHeight){
            document.querySelector('.aboutme').style.background ='black';
            document.querySelector('.aboutme').style.color ='white';

            document.querySelector('.portfolio').style.background ='white';
            document.querySelector('.portfolio').style.color='#7f7f7f'

            document.querySelector('.price').style.background ='white';
            document.querySelector('.price').style.color='#7f7f7f'

            document.querySelector('.contact').style.background ='white';
            document.querySelector('.contact').style.color='#7f7f7f'
        }else if(window.scrollY <1.6*document.getElementById('biography').clientHeight){
             document.querySelector('.aboutme').style.background ='white';
            document.querySelector('.aboutme').style.color ='#7f7f7f';

            document.querySelector('.portfolio').style.background ='black';
            document.querySelector('.portfolio').style.color='white'

            document.querySelector('.price').style.background ='white';
            document.querySelector('.price').style.color='#7f7f7f'

            document.querySelector('.contact').style.background ='white';
            document.querySelector('.contact').style.color='#7f7f7f'
        }else if (window.scrollY<2.6*document.getElementById('biography').clientHeight){
            document.querySelector('.aboutme').style.background ='white';
            document.querySelector('.aboutme').style.color ='#7f7f7f';

            document.querySelector('.portfolio').style.background ='white';
            document.querySelector('.portfolio').style.color='#7f7f7f'

            document.querySelector('.price').style.background ='black';
            document.querySelector('.price').style.color='white'

            document.querySelector('.contact').style.background ='white';
            document.querySelector('.contact').style.color='#7f7f7f'
        }
        else{
            document.querySelector('.aboutme').style.background ='white';
            document.querySelector('.aboutme').style.color ='#7f7f7f';

            document.querySelector('.portfolio').style.background ='white';
            document.querySelector('.portfolio').style.color='#7f7f7f'

            document.querySelector('.price').style.background ='white';
            document.querySelector('.price').style.color='#7f7f7f'

            document.querySelector('.contact').style.background ='black';
            document.querySelector('.contact').style.color='white'
        }
    })
