const getColorMode = () => {
    localStorage.getItem('colorMode')
}

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for(let i =0 ; i < radioButtons.length; i++){
    radioButtons[i].addEventListener('click',(event) =>{
        if(document.getElementById('dark').checked){
            document.querySelector('body').classList = 'dark'
            localStorage.setItem('colorMode', 'dark');

        }else{
        document.querySelector('body').classList = 'light';
        localStorage.setItem('colorMode', 'light');
        }
    })
}