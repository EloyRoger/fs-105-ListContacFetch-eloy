const URL= 'https://playground.4geeks.com/contact/agendas/Eloy/contacts';

export const getContact = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        
        return data.contacts;
    } catch (err) {
        console.log('ERROR GET CONTACT LIST', err);
    }
}

export const deleteContactById = async (id) =>{
    try {
        const response = await fetch(`${URL}/${id}`,{
            method: 'DELETE'
        });
        console.log(response);
    if (response.status = 204){
        return true;
    }
       
    } catch (err) {
        console.log('ERROR DELETE CONTACT', err);
    }
}






