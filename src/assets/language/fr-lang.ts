export default {
    content: {
        language: {
            headerComponent: {
                title: 'Accueil'
            },
            footerComponent: {
                language: 'La langue',
                copyright: 'Construit avec React 16.4.1 © Wilson',
            },
            sidebarComponent: {
                department: 'Départements',
                about: 'Environ',
                logout: 'Connectez - Out'
            },
            offerComponent: {
                title: 'Offert'
            },
            loginComponent: {
                title: 'EMS',
                labels: {
                    username: 'Nom d\'utilisateur:',
                    password: 'Mot de passe:'
                },
                placeholders: {
                    username: 'Votre nom d\'utilisateur',
                    password: 'Entrer le mot de passe'
                },
                errors: {
                    username: 'Veuillez entrer votre nom d\'utilisateur',
                    password: 'Veuillez entrer le mot de passe'
                }
            },
            employeeComponent: {
                title: 'Liste des employés',
                id: 'Id',
                name: 'Prénom',
                username: 'Nom d\'utilisateur',
                email: 'Email',
                website: 'Site Internet',
                action: 'Action'
            },
            buttons: {
                newEmployee: 'Nouvel employé',
                delete: 'Effacer',
                login: 'S\'identifier'
            }
        }
    }
};
