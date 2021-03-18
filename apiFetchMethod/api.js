
document.querySelector('#cp').addEventListener('input', function() {
    if (this.value.length ==  5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;
        
        fetch(url).then(reponse => reponse.json().then(data => {
            console.log(data);
            let list = '<ul>';
            if (data.length == 0) {
                list +=  `<li>no ville found</li>`;
            } 
            for (let ville of data) {
                list +=  `<li><strong>${ville.nom}</strong> has a population of <strong>${ville.population}</strong> citizens.</li>`;
            }
            list += '</ul>';
            document.querySelector('#villes').innerHTML = list;
        })).catch(err => console('erruer: '+err));
    }
});