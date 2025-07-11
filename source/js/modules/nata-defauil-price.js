const defaultPriceNata = () => {
    window.addEventListener('DOMContentLoaded', () => {
        console.log(1);
        
        const radioValue  = document.getElementById('certif-1');
            if(radioValue){
                radioValue.checked = true;
            }
    });
};

export { defaultPrice };