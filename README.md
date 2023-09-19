Intro

- Redux Toolkit - manages state immutability issue!
- persisting the state - in case of authed user, if u close the page and come back, u are still authed

Cerinta: Implementati in React JS o aplicatie de asigurari care sa permita utilizatorilor care au cont in aplicatie sa
ceara o oferta de asigurare pentru RCA sau CASCO si sa vizualizeze din contul personal ofertele solicitate

Flow-ul aplicatiei:
La deschiderea aplicatiei utilizatorul vede o pagina de Welcome din care poate naviga catre urmatoarele doua actiuni:
Logare, Creare oferta.

1. Logare

1.1 Creare cont: Daca utilizatorul nu are cont va avea posibilitate sa isi creeze un cont folosind o adresa de email
care are format valid (john@doe.com) si o parola de minim 5 caractere (2 litere, 2 numere si un caracter special)
✔️

1.2.
Autentificare: Daca utilizatorul se logheaza cu succes in cont, se va afisa un contor cu numarul total de oferte create
in aplicatie.
De asemenea in contul de utilizator se va afisa un tabel in care utilizatorul poate consulta datele
introduse pentru fiecare oferta si primele care i-au fost generate de aplicatie. ✔️

2. Creare oferta:

Daca utilizatorul nu este logat, la accesarea acestei pagini se va afisa o pagina modala care il va instinta ca poate sa
continue procesul de emitere doar daca se logheaza (Puteti folosi CSS module pentru stilizarea modalei). Pagina modala
va avea doua butoane:
Cancel (va face redirect catre pagina de Welcome) si Login (va face redirect la pagina de Login). Daca utilizatorul da
click in exteriorul modalei aceasta se va inchide si utilizatorul va reveni pe pagina de Welcome. ✔️

Daca utilizatorul este logat se afiseaza un formular cu urmatoarele campuri pe care trebuie sa le completeze: - Nume (
obligatoriu, minim 3
caractere) - Prenume (optional, maxim 10 caractere daca este completat) - Data nasterii (obligatoriu, numeric, pentru an
valori intre 1900 si anul curent. Format yyyy-mm-dd) - Tip asigurare (obligatoriu, Dropdown cu urmatoarele posibilitati:
Rca, Casco) -
Dupa alegerea optiunii de asigurare se vor adauga dinamic urmatoarele campuri in functie de raspunsul
ales. ✔️

In cazul in care utilizatorul a optat pentru o asigurare de tipul RCA i se va cere sa introduca: Marca masinii,
Anul fabricatiei, Nr. de inmatriculare. ✔️

In cazul in care utilizatorul opteaza pentru o asigurare CASCO, aplicatia va genera pentru completare campurile: Serie
de sasiu, Nr. de kilometri. ✔️

Validarile se vor face la apasarea butonului de trimitere formular. In cazul in care nu sunt
indeplinite toate criteriile de completare se va afisa cate un mesaj specific in dreptul campului care nu este completat
corespunzator. ✔️

Daca toate verificarile au fost indeplinite cu succes, se va genera o prima dupa care utilizatorul va fi
redirectionat in contul personal pentru a vizualiza ofertele create. Prima va fi generate aleator. Trebuie sa fie de tip
numeric si sa aiba formatul (ddd.dd). ✔️

Cerinte tehnice:

- Creati componente reutilizabile de tipul Functional Components ✔️

Rutare:

- React router (Se poate folosi BrowserRouter sau MemoryRouter) ✔️

Stilizarea aplicatiei:

- React Icons ✔️(Semantic UI Icons)
- Folosirea unor frameworkuri de CSS constituie un avantaj ✔️(Semantic UI React)

Gestiunea datelor:

- React Context
- Redux (constituie un avantaj) ✔️(Redux Toolkit)
- Folosirea Redux Form (constituie un avantaj) ✔️(Formik + Yup - better approach)

Persistenta datelor: Se poate folosi la alegere o baza de
date NoSQL, SQL sau alte metode de stocare a datelor (local storage) ✔️(local storage)

Folosirea Typescript reprezinta un avantaj ✔️
