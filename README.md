# recipe-training

github: https://github.com/22DP1AKaha/VueTraining

Šo Repository es izmantošu prieks Vue framework apgūšanas

# Recipe Generator

## Projekta apraksts
Recipe Generator ir Vue un Laravel bāzēta tīmekļa lietotne, kas piedāvā lietotājiem dažādus veidus, kā atrast un ģenerēt receptes. Projekta mērķis ir sniegt ērtu veidu, kā atrast receptes pēc meklēšanas vai pieejamām sastāvdaļām, kā arī ģenerēt pielāgotus ēdienus, izmantojot AI.

## Funkcionalitāte
1. **Frontend izveide ar Vue**  
   Projekts izmanto Vue framework, lai izveidotu lietotājam draudzīgu un dinamisku mājaslapu.

2. **Recepšu meklēšanas lapa**  
   - Lietotāji var ievadīt meklēšanas laukā ēdiena nosaukumu vai atslēgvārdus.  
   - Pēc receptes izvēles tiek atvērta dinamiska lapa, kurā tiek parādīta informācija par ēdienu un tā pagatavošanas instrukcijas.

3. **Vienkārša recepšu ģenerēšana**  
   - Lietotāji var atlasīt sastāvdaļas, kas viņiem ir pieejamas.  
   - Sistēma ģenerē receptes, kas izmanto šīs sastāvdaļas.  
   - Šī funkcija pašlaik darbojas, izmantojot Spoonacular API.  

## Nākotnes plāni
- **AI balstīta recepšu ģenerēšana** – Plānots izstrādāt pielāgotu mašīnmācīšanās modeli, kas spēs ģenerēt receptes tikai no lietotāja atlasītajām sastāvdaļām.  
- **Lietotāju profili un personalizācija** – Iespēja saglabāt iecienītākās receptes un pielāgot ieteikumus pēc diētas un alerģijām.  
- **Uzlabota backend integrācija** – Laravel tiks izmantots, lai apstrādātu recepšu datus un AI modeli.

## Tehnoloģijas
- **Frontend:** Vue.js  
- **Backend:** Laravel (plānots)  
- **Datu apstrāde:** PHP-ML (plānots)  
- **Ārējais API:** Spoonacular API (izmantojams recepšu ģenerēšanai)  



## Konceptuālās datu bāzes pārbaude attiecībā uz 3NF

Zemāk ir aprakstītas tabulas un to atbilstība 3NF.

### Lietotājs (User)

| Kolonna                | Tips          | Apraksts |
|------------------------|--------------|----------|
| lietotaja_id          | INT (PK)     | Unikāls lietotāja identifikators |
| lietotaja_vards       | VARCHAR      | Lietotāja vārds |
| epasts               | VARCHAR      | Lietotāja e-pasts |
| parole_hash          | VARCHAR      | Šifrēta parole |
| registracijas_datums | DATETIME      | Reģistrācijas datums |
| pēdējā_pieteikšanās  | DATETIME      | Pēdējā pieteikšanās laiks |
| dietas_ierobežojumi  | JSON         | Lietotāja diētas ierobežojumi |
| alerģijas            | JSON         | Lietotāja alerģijas |

- **1NF**: Nav daudzvērtību vai salikto atribūtu.
- **2NF**: Visi atribūti ir pilnībā atkarīgi no primārās atslēgas.
- **3NF**: Nav pārejošu atkarību.
- **Secinājums**: Atbilst 3NF.

### Recepte (Recipe)

| Kolonna               | Tips      | Apraksts |
|-----------------------|----------|----------|
| receptes_id         | INT (PK) | Unikāls receptes identifikators |
| nosaukums           | VARCHAR  | Receptes nosaukums |
| apraksts           | TEXT     | Gatavošanas apraksts |
| gatavošanas_laiks   | INT      | Laiks minūtēs |
| porcijas           | INT      | Porciju skaits |
| grūtības_pakāpe    | VARCHAR  | Grūtības pakāpe |
| ēdienreize         | VARCHAR  | Ēdienreizes veids |
| dietas_tips        | VARCHAR  | Diētas tips |
| galvenais_olbaltumvielu_avots | VARCHAR | Galvenais proteīna avots |
| datums_izveidots   | DATETIME | Izveides datums |
| datums_atjaunināts | DATETIME | Pēdējais atjauninājums |
| ir_publiska        | BOOLEAN  | Vai recepte ir publiska |

- **1NF**: Nav daudzvērtību vai salikto atribūtu.
- **2NF**: Visi atribūti ir pilnībā atkarīgi no primārās atslēgas.
- **3NF**: Nav pārejošu atkarību.
- **Secinājums**: Atbilst 3NF.

### Sastāvdaļa (Ingredient)

| Kolonna       | Tips      | Apraksts |
|--------------|----------|----------|
| sastavdaļas_id | INT (PK) | Unikāls sastāvdaļas identifikators |
| nosaukums    | VARCHAR  | Sastāvdaļas nosaukums |
| kategorija   | VARCHAR  | Sastāvdaļas kategorija |

- **1NF**: Nav daudzvērtību vai salikto atribūtu.
- **2NF**: Visi atribūti ir pilnībā atkarīgi no primārās atslēgas.
- **3NF**: Nav pārejošu atkarību.
- **Secinājums**: Atbilst 3NF.

### Receptes Sastāvdaļa (RecipeIngredient)

| Kolonna                | Tips      | Apraksts |
|------------------------|----------|----------|
| receptes_sastavdaļas_id | INT (PK) | Unikāls identifikators |
| receptes_id          | INT (FK) | Atsauce uz recepti |
| sastavdaļas_id       | INT (FK) | Atsauce uz sastāvdaļu |
| daudzums            | VARCHAR  | Sastāvdaļas daudzums |


- **1NF**: Nav daudzvērtību vai salikto atribūtu.
- **2NF**: Visi atribūti ir pilnībā atkarīgi no primārās atslēgas.
- **3NF**: Nav pārejošu atkarību.
- **Secinājums**: Atbilst 3NF.

### Pagatavošanas solis (Instruction)

| Kolonna     | Tips      | Apraksts |
|------------|----------|----------|
| solis_id   | INT (PK) | Unikāls identifikators |
| receptes_id | INT (FK) | Atsauce uz recepti |
| solis_numurs | INT | Solis receptē |
| apraksts   | TEXT     | Solis apraksts |

- **1NF**: Nav daudzvērtību vai salikto atribūtu.
- **2NF**: Visi atribūti ir pilnībā atkarīgi no primārās atslēgas.
- **3NF**: Nav pārejošu atkarību.
- **Secinājums**: Atbilst 3NF.

### Favorīti (Favorites)

| Kolonna        | Tips      | Apraksts |
|---------------|----------|----------|
| favorīts_id  | INT (PK) | Unikāls identifikators |
| lietotaja_id | INT (FK) | Atsauce uz lietotāju |
| receptes_id  | INT (FK) | Atsauce uz recepti |

- **Secinājums**: Atbilst 3NF.

### Vērtējums (Rating)

| Kolonna        | Tips      | Apraksts |
|---------------|----------|----------|
| vertejums_id  | INT (PK) | Unikāls identifikators |
| lietotaja_id  | INT (FK) | Atsauce uz lietotāju |
| receptes_id   | INT (FK) | Atsauce uz recepti |
| vertejums     | INT      | Vērtējums (1-5) |
| komentārs     | TEXT     | Lietotāja komentārs |

- **Secinājums**: Atbilst 3NF.

---

## Noslēgums

Visas tabulas ir pārbaudītas un atbilst trešajai normālformai (3NF), nodrošinot optimālu datu struktūru, integritāti un efektīvu vaicājumu izpildi.
