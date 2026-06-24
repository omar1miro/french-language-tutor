export const PRESET_DECKS = {
  greetings: {
    title: 'Greetings & Basics',
    icon: 'MessageCircle',
    difficulty: 'beginner',
    cards: [
      { french: 'Bonjour', english: 'Hello / Good morning', pronunciation: 'bohn-zhoor', example: 'Bonjour, comment allez-vous ?', example_english: 'Hello, how are you?' },
      { french: 'Salut', english: 'Hi / Bye', pronunciation: 'sah-loo', example: 'Salut ! Ça va ?', example_english: 'Hi! How is it going?' },
      { french: 'S\'il vous plaît', english: 'Please (polite)', pronunciation: 'seel voo pleh', example: 'Un café, s\'il vous plaît.', example_english: 'A coffee, please.' },
      { french: 'Merci beaucoup', english: 'Thank you very much', pronunciation: 'mair-see boh-koo', example: 'Merci beaucoup pour votre aide.', example_english: 'Thank you very much for your help.' },
      { french: 'De rien', english: 'You are welcome', pronunciation: 'duh ree-ehn', example: 'Merci ! - De rien.', example_english: 'Thank you! - You are welcome.' },
      { french: 'Au revoir', english: 'Goodbye', pronunciation: 'oh ruh-vwar', example: 'Au revoir, à demain !', example_english: 'Goodbye, see you tomorrow!' },
      { french: 'Comment ça va ?', english: 'How is it going?', pronunciation: 'ko-mahn sah vah', example: 'Salut ! Comment ça va ?', example_english: 'Hi! How is it going?' },
      { french: 'Enchanté', english: 'Nice to meet you', pronunciation: 'ahn-shahn-tay', example: 'Enchanté de vous rencontrer.', example_english: 'Nice to meet you (polite).' },
      { french: 'Oui / Non', english: 'Yes / No', pronunciation: 'wee / nohn', example: 'Oui, s\'il vous plaît.', example_english: 'Yes, please.' },
      { french: 'Je m\'appelle...', english: 'My name is...', pronunciation: 'zhuh mah-pell', example: 'Je m\'appelle Omar.', example_english: 'My name is Omar.' }
    ]
  },
  food: {
    title: 'Food & Dining',
    icon: 'Coffee',
    difficulty: 'beginner',
    cards: [
      { french: 'Le pain', english: 'The bread', pronunciation: 'luh pehn', example: 'Je mange du pain frais.', example_english: 'I eat fresh bread.' },
      { french: 'Le fromage', english: 'The cheese', pronunciation: 'luh froh-mahzh', example: 'La France a beaucoup de fromages.', example_english: 'France has a lot of cheeses.' },
      { french: 'Le café', english: 'The coffee', pronunciation: 'luh kah-fay', example: 'Je prends un café noir le matin.', example_english: 'I take a black coffee in the morning.' },
      { french: 'Le croissant', english: 'The croissant', pronunciation: 'luh krwa-sahn', example: 'Un croissant croustillant.', example_english: 'A crispy croissant.' },
      { french: 'L\'addition', english: 'The bill', pronunciation: 'lah-dee-syohn', example: 'L\'addition, s\'il vous plaît.', example_english: 'The bill, please.' },
      { french: 'L\'eau', english: 'The water', pronunciation: 'loh', example: 'Une bouteille d\'eau, s\'il vous plaît.', example_english: 'A bottle of water, please.' },
      { french: 'Délicieux', english: 'Delicious', pronunciation: 'day-lee-syuh', example: 'Ce repas est délicieux !', example_english: 'This meal is delicious!' },
      { french: 'Le serveur', english: 'The waiter', pronunciation: 'luh sair-vuhr', example: 'Le serveur prend la commande.', example_english: 'The waiter takes the order.' },
      { french: 'Le petit-déjeuner', english: 'The breakfast', pronunciation: 'luh puh-tee-day-zhuh-nay', example: 'Je mange à huit heures.', example_english: 'I eat breakfast at 8 o\'clock.' },
      { french: 'La pomme', english: 'The apple', pronunciation: 'lah puhm', example: 'Je mange une pomme rouge.', example_english: 'I am eating a red apple.' }
    ]
  },
  travel: {
    title: 'Travel & Directions',
    icon: 'MapPin',
    difficulty: 'beginner',
    cards: [
      { french: 'L\'hôtel', english: 'The hotel', pronunciation: 'loh-tell', example: 'Où est l\'hôtel le plus proche ?', example_english: 'Where is the nearest hotel?' },
      { french: 'La gare', english: 'The train station', pronunciation: 'lah gahr', example: 'Le train part de la gare.', example_english: 'The train leaves from the station.' },
      { french: 'L\'aéroport', english: 'The airport', pronunciation: 'lah-ay-roh-por', example: 'Mon vol décolle de cet aéroport.', example_english: 'My flight takes off from this airport.' },
      { french: 'Où est... ?', english: 'Where is...?', pronunciation: 'oo ay', example: 'Où est le métro ?', example_english: 'Where is the metro?' },
      { french: 'Le billet', english: 'The ticket', pronunciation: 'luh bee-yeh', example: 'Voici votre billet de train.', example_english: 'Here is your train ticket.' },
      { french: 'À droite', english: 'To the right', pronunciation: 'ah drwaht', example: 'Tournez à droite après le feu.', example_english: 'Turn right after the traffic light.' },
      { french: 'À gauche', english: 'To the left', pronunciation: 'ah gohsh', example: 'La gare est à gauche.', example_english: 'The station is on the left.' },
      { french: 'Tout droit', english: 'Straight ahead', pronunciation: 'too drwa', example: 'Allez tout droit vers le pont.', example_english: 'Go straight ahead towards the bridge.' },
      { french: 'Le passeport', english: 'The passport', pronunciation: 'luh pahs-por', example: 'Contrôle des passeports s\'il vous plaît.', example_english: 'Passport control please.' },
      { french: 'Le taxi', english: 'The taxi', pronunciation: 'luh tahk-see', example: 'Appelez un taxi pour moi.', example_english: 'Call a taxi for me.' }
    ]
  },
  numbers: {
    title: 'Numbers & Time',
    icon: 'Clock',
    difficulty: 'beginner',
    cards: [
      { french: 'Un / Deux / Trois', english: 'One / Two / Three', pronunciation: 'uhn / duh / trwa', example: 'Un, deux, trois, partez !', example_english: 'One, two, three, go!' },
      { french: 'Quatre / Cinq / Six', english: 'Four / Five / Six', pronunciation: 'katr / sehnk / sees', example: 'J\'ai six pommes.', example_english: 'I have six apples.' },
      { french: 'Sept / Huit / Neuf / Dix', english: 'Seven / Eight / Nine / Ten', pronunciation: 'set / weet / nuhf / dees', example: 'Le numéro dix gagne.', example_english: 'Number ten wins.' },
      { french: 'Quelle heure est-il ?', english: 'What time is it?', pronunciation: 'kel uhr ay-teel', example: 'Excusez-moi, quelle heure est-il ?', example_english: 'Excuse me, what time is it?' },
      { french: 'Lundi / Dimanche', english: 'Monday / Sunday', pronunciation: 'lehn-dee / dee-mahnsh', example: 'Le musée est fermé le lundi.', example_english: 'The museum is closed on Mondays.' },
      { french: 'Aujourd\'hui', english: 'Today', pronunciation: 'oh-zhoor-dwee', example: 'Aujourd\'hui il fait très beau.', example_english: 'Today it is very beautiful.' },
      { french: 'Demain', english: 'Tomorrow', pronunciation: 'duh-mehn', example: 'À demain, bonne nuit !', example_english: 'See you tomorrow, good night!' },
      { french: 'Matin / Soir', english: 'Morning / Evening', pronunciation: 'mah-tehn / swahr', example: 'Je lis le matin et le soir.', example_english: 'I read in the morning and evening.' },
      { french: 'La semaine', english: 'The week', pronunciation: 'lah suh-men', example: 'Il y a sept jours dans une semaine.', example_english: 'There are seven days in a week.' },
      { french: 'L\'année', english: 'The year', pronunciation: 'lah-nay', example: 'Bonne année et bonne santé !', example_english: 'Happy New Year and good health!' }
    ]
  },
  animals: {
    title: 'Animals',
    icon: 'PawPrint',
    difficulty: 'beginner',
    cards: [
      { french: 'Le chien', english: 'The dog', pronunciation: 'luh shee-ehn', example: 'Le chien joue dans le parc.', example_english: 'The dog plays in the park.' },
      { french: 'Le chat', english: 'The cat', pronunciation: 'luh shah', example: 'Le chat dort sur le canapé.', example_english: 'The cat sleeps on the sofa.' },
      { french: 'L\'oiseau', english: 'The bird', pronunciation: 'lwah-zoh', example: 'L\'oiseau chante le matin.', example_english: 'The bird sings in the morning.' },
      { french: 'Le poisson', english: 'The fish', pronunciation: 'luh pwah-sohn', example: 'Le poisson nage dans la mer.', example_english: 'The fish swims in the sea.' },
      { french: 'Le cheval', english: 'The horse', pronunciation: 'luh shuh-val', example: 'Le cheval court très vite.', example_english: 'The horse runs very fast.' },
      { french: 'La vache', english: 'The cow', pronunciation: 'lah vahsh', example: 'La vache donne du lait.', example_english: 'The cow gives milk.' },
      { french: 'Le lapin', english: 'The rabbit', pronunciation: 'luh lah-pahn', example: 'Le lapin mange des carottes.', example_english: 'The rabbit eats carrots.' },
      { french: 'L\'ours', english: 'The bear', pronunciation: 'loors', example: 'L\'ours habite dans la forêt.', example_english: 'The bear lives in the forest.' },
      { french: 'Le papillon', english: 'The butterfly', pronunciation: 'luh pah-pee-yohn', example: 'Le papillon est très joli.', example_english: 'The butterfly is very pretty.' },
      { french: 'La tortue', english: 'The turtle', pronunciation: 'lah tor-too', example: 'La tortue avance lentement.', example_english: 'The turtle moves slowly.' }
    ]
  },
  body: {
    title: 'Body Parts',
    icon: 'Heart',
    difficulty: 'beginner',
    cards: [
      { french: 'La tête', english: 'The head', pronunciation: 'lah tet', example: 'J\'ai mal à la tête.', example_english: 'I have a headache.' },
      { french: 'Les yeux', english: 'The eyes', pronunciation: 'lay zyuh', example: 'Elle a de beaux yeux bleus.', example_english: 'She has beautiful blue eyes.' },
      { french: 'Le nez', english: 'The nose', pronunciation: 'luh nay', example: 'Ton nez est rouge.', example_english: 'Your nose is red.' },
      { french: 'La bouche', english: 'The mouth', pronunciation: 'lah boosh', example: 'Ouvre la bouche, s\'il te plaît.', example_english: 'Open your mouth, please.' },
      { french: 'La main', english: 'The hand', pronunciation: 'lah mehn', example: 'Lave-toi les mains.', example_english: 'Wash your hands.' },
      { french: 'Le bras', english: 'The arm', pronunciation: 'luh brah', example: 'Il a le bras en écharpe.', example_english: 'His arm is in a sling.' },
      { french: 'La jambe', english: 'The leg', pronunciation: 'lah zhahmb', example: 'J\'ai mal à la jambe.', example_english: 'My leg hurts.' },
      { french: 'Le pied', english: 'The foot', pronunciation: 'luh pyay', example: 'Mes pieds sont fatigués.', example_english: 'My feet are tired.' },
      { french: 'Le dos', english: 'The back', pronunciation: 'luh doh', example: 'J\'ai mal au dos.', example_english: 'I have a backache.' },
      { french: 'Le cœur', english: 'The heart', pronunciation: 'luh kuhr', example: 'Mon cœur bat vite.', example_english: 'My heart beats fast.' }
    ]
  },
  weather: {
    title: 'Weather & Nature',
    icon: 'CloudSun',
    difficulty: 'beginner',
    cards: [
      { french: 'Il fait chaud', english: 'It is hot', pronunciation: 'eel feh show', example: 'Il fait chaud en été.', example_english: 'It is hot in summer.' },
      { french: 'Il fait froid', english: 'It is cold', pronunciation: 'eel feh frwah', example: 'Il fait froid en hiver.', example_english: 'It is cold in winter.' },
      { french: 'Il pleut', english: 'It is raining', pronunciation: 'eel pluh', example: 'Il pleut depuis ce matin.', example_english: 'It has been raining since this morning.' },
      { french: 'Il neige', english: 'It is snowing', pronunciation: 'eel nehzhh', example: 'Il neige beaucoup en montagne.', example_english: 'It snows a lot in the mountains.' },
      { french: 'Le vent', english: 'The wind', pronunciation: 'luh vahn', example: 'Le vent souffle très fort.', example_english: 'The wind blows very hard.' },
      { french: 'Le soleil', english: 'The sun', pronunciation: 'luh soh-lay', example: 'Le soleil brille aujourd\'hui.', example_english: 'The sun is shining today.' },
      { french: 'La pluie', english: 'The rain', pronunciation: 'lah plwee', example: 'J\'ai oublié mon parapluie.', example_english: 'I forgot my umbrella.' },
      { french: 'Le nuage', english: 'The cloud', pronunciation: 'luh noo-ahzh', example: 'Le ciel est plein de nuages.', example_english: 'The sky is full of clouds.' },
      { french: 'L\'arc-en-ciel', english: 'The rainbow', pronunciation: 'lark-ahn-syel', example: 'Regarde l\'arc-en-ciel !', example_english: 'Look at the rainbow!' },
      { french: 'La tempête', english: 'The storm', pronunciation: 'lah tahm-pet', example: 'La tempête arrive ce soir.', example_english: 'The storm arrives tonight.' }
    ]
  },
  emotions: {
    title: 'Emotions & Feelings',
    icon: 'Smile',
    difficulty: 'intermediate',
    cards: [
      { french: 'Le bonheur', english: 'Happiness', pronunciation: 'luh boh-nuhr', example: 'Le bonheur est un choix.', example_english: 'Happiness is a choice.' },
      { french: 'La tristesse', english: 'Sadness', pronunciation: 'lah trees-ess', example: 'La tristesse se lit dans ses yeux.', example_english: 'Sadness is read in his eyes.' },
      { french: 'La colère', english: 'Anger', pronunciation: 'lah koh-lair', example: 'Il a du mal à gérer sa colère.', example_english: 'He has trouble managing his anger.' },
      { french: 'La peur', english: 'Fear', pronunciation: 'lah puhr', example: 'La peur est un sentiment naturel.', example_english: 'Fear is a natural feeling.' },
      { french: 'La surprise', english: 'Surprise', pronunciation: 'lah seer-preez', example: 'Quelle surprise de te voir !', example_english: 'What a surprise to see you!' },
      { french: 'L\'ennui', english: 'Boredom', pronunciation: 'lahn-wee', example: 'J\'ai l\'ennui de rester à la maison.', example_english: 'I am bored of staying at home.' },
      { french: 'L\'excitation', english: 'Excitement', pronunciation: 'lek-see-tah-syohn', example: 'L\'excitation monte avant le voyage.', example_english: 'Excitement builds before the trip.' },
      { french: 'La honte', english: 'Shame', pronunciation: 'lah ohnt', example: 'J\'ai eu honte de mon erreur.', example_english: 'I was ashamed of my mistake.' },
      { french: 'La fierté', english: 'Pride', pronunciation: 'lah fee-air-tay', example: 'Je suis fier de toi.', example_english: 'I am proud of you.' },
      { french: 'Le découragement', english: 'Discouragement', pronunciation: 'luh day-koo-rahzh-mahn', example: 'Ne cède pas au découragement.', example_english: 'Don\'t give in to discouragement.' }
    ]
  },
  household: {
    title: 'House & Home',
    icon: 'Home',
    difficulty: 'intermediate',
    cards: [
      { french: 'Le canapé', english: 'The sofa', pronunciation: 'luh kah-nah-pay', example: 'Le canapé est dans le salon.', example_english: 'The sofa is in the living room.' },
      { french: 'La cuisine', english: 'The kitchen', pronunciation: 'lah kwee-zeen', example: 'Je cuisine dans la cuisine.', example_english: 'I cook in the kitchen.' },
      { french: 'La chambre', english: 'The bedroom', pronunciation: 'lah shahmbr', example: 'Ma chambre est au deuxième étage.', example_english: 'My bedroom is on the second floor.' },
      { french: 'Le placard', english: 'The closet', pronunciation: 'luh plah-kahr', example: 'Les vêtements sont dans le placard.', example_english: 'The clothes are in the closet.' },
      { french: 'La douche', english: 'The shower', pronunciation: 'lah doosh', example: 'Je prends une douche le matin.', example_english: 'I take a shower in the morning.' },
      { french: 'Le réfrigérateur', english: 'The refrigerator', pronunciation: 'luh ray-free-zhay-rah-tuhr', example: 'Mets le lait dans le réfrigérateur.', example_english: 'Put the milk in the refrigerator.' },
      { french: 'Le jardin', english: 'The garden', pronunciation: 'luh zhahr-dahn', example: 'Le jardin est plein de fleurs.', example_english: 'The garden is full of flowers.' },
      { french: 'Le grenier', english: 'The attic', pronunciation: 'luh gruh-nee-ay', example: 'Les vieilleries sont dans le grenier.', example_english: 'The old things are in the attic.' },
      { french: 'La Cave', english: 'The basement/cellar', pronunciation: 'lah kahv', example: 'Le vin est stocké dans la cave.', example_english: 'The wine is stored in the cellar.' },
      { french: 'Le balcon', english: 'The balcony', pronunciation: 'luh bahl-kohn', example: 'Je lis sur le balcon.', example_english: 'I read on the balcony.' }
    ]
  },
  health: {
    title: 'Health & Wellness',
    icon: 'Stethoscope',
    difficulty: 'intermediate',
    cards: [
      { french: 'Le médecin', english: 'The doctor', pronunciation: 'luh mayd-sahn', example: 'Je dois voir le médecin.', example_english: 'I need to see the doctor.' },
      { french: 'La pharmacie', english: 'The pharmacy', pronunciation: 'lah fahr-mah-see', example: 'La pharmacie est ouverte jusqu\'à 20h.', example_english: 'The pharmacy is open until 8pm.' },
      { french: 'Le rhume', english: 'The cold (illness)', pronunciation: 'luh room', example: 'J\'ai le rhume depuis une semaine.', example_english: 'I\'ve had a cold for a week.' },
      { french: 'La fièvre', english: 'The fever', pronunciation: 'lah fee-eve', example: 'Elle a de la fièvre depuis ce matin.', example_english: 'She\'s had a fever since this morning.' },
      { french: 'Le mal de tête', english: 'Headache', pronunciation: 'luh mal duh tet', example: 'J\'ai un mal de tête terrible.', example_english: 'I have a terrible headache.' },
      { french: 'La ordonnance', english: 'The prescription', pronunciation: 'lah ohr-doh-nahns', example: 'Le médecin a écrit une ordonnance.', example_english: 'The doctor wrote a prescription.' },
      { french: 'Le rendez-vous', english: 'The appointment', pronunciation: 'luh rahn-day-voo', example: 'J\'ai un rendez-vous à 14h.', example_english: 'I have an appointment at 2pm.' },
      { french: 'Le sport', english: 'Exercise/sports', pronunciation: 'luh spohr', example: 'Le sport est bon pour la santé.', example_english: 'Exercise is good for health.' },
      { french: 'Le sommeil', english: 'Sleep', pronunciation: 'luh soh-may', example: 'J\'ai besoin de sommeil.', example_english: 'I need sleep.' },
      { french: 'La fatigue', english: 'Tiredness', pronunciation: 'lah tee-fahg', example: 'La fatigue se fait sentir.', example_english: 'Tiredness is setting in.' }
    ]
  },
  work: {
    title: 'Work & Career',
    icon: 'Briefcase',
    difficulty: 'intermediate',
    cards: [
      { french: 'Le bureau', english: 'The office/desk', pronunciation: 'luh boo-roh', example: 'Je travaille au bureau.', example_english: 'I work at the office.' },
      { french: 'La réunion', english: 'The meeting', pronunciation: 'lah ray-oo-nee-ohn', example: 'La réunion commence à neuf heures.', example_english: 'The meeting starts at nine o\'clock.' },
      { french: 'Le collègue', english: 'The colleague', pronunciation: 'luh koh-leg', example: 'Mon collègue est très sympathique.', example_english: 'My colleague is very nice.' },
      { french: 'Le salaire', english: 'The salary', pronunciation: 'luh sah-lair', example: 'Le salaire est versé chaque mois.', example_english: 'The salary is paid each month.' },
      { french: 'L\'entretien', english: 'The interview', pronunciation: 'lahn-truh-tee-ehn', example: 'J\'ai un entretien demain.', example_english: 'I have an interview tomorrow.' },
      { french: 'Le contrat', english: 'The contract', pronunciation: 'luh kohn-trah', example: 'Le contrat est pour deux ans.', example_english: 'The contract is for two years.' },
      { french: 'Les vacances', english: 'The vacation/holidays', pronunciation: 'lay vah-kahns', example: 'Je pars en vacances en juillet.', example_english: 'I\'m going on vacation in July.' },
      { french: 'Le chômage', english: 'Unemployment', pronunciation: 'luh shoh-mahzh', example: 'Le chômage augmente en ce moment.', example_english: 'Unemployment is rising right now.' },
      { french: 'Le patron', english: 'The boss', pronunciation: 'luh pah-trohn', example: 'Le patron est en réunion.', example_english: 'The boss is in a meeting.' },
      { french: 'Le cv', english: 'The resume', pronunciation: 'luh say-vay', example: 'Envoie ton cv par email.', example_english: 'Send your resume by email.' }
    ]
  },
  media: {
    title: 'Media & Culture',
    icon: 'Tv',
    difficulty: 'intermediate',
    cards: [
      { french: 'Le journal', english: 'The newspaper', pronunciation: 'luh zhoo-rnahl', example: 'Je lis le journal chaque matin.', example_english: 'I read the newspaper every morning.' },
      { french: 'Le film', english: 'The movie', pronunciation: 'luh feelm', example: 'Ce film est très bien.', example_english: 'This movie is very good.' },
      { french: 'La musique', english: 'The music', pronunciation: 'lah moo-zeek', example: 'J\'écoute de la musique française.', example_english: 'I listen to French music.' },
      { french: 'La télévision', english: 'The television', pronunciation: 'lah tay-lay-vee-zee-ohn', example: 'La télévision est allumée.', example_english: 'The television is on.' },
      { french: 'L\'internet', english: 'The internet', pronunciation: 'lahn-tehr-net', example: 'J\'utilise internet pour travailler.', example_english: 'I use the internet to work.' },
      { french: 'La photo', english: 'The photo', pronunciation: 'lah foh-toh', example: 'Elle prend beaucoup de photos.', example_english: 'She takes a lot of photos.' },
      { french: 'Le livre', english: 'The book', pronunciation: 'luh lee-vruh', example: 'Ce livre est passionnant.', example_english: 'This book is exciting.' },
      { french: 'La chanson', english: 'The song', pronunciation: 'lah shahn-sohn', example: 'Cette chanson est très populaire.', example_english: 'This song is very popular.' },
      { french: 'Le spectacle', english: 'The show', pronunciation: 'luh spek-tahkl', example: 'Le spectacle commence à vingt heures.', example_english: 'The show starts at eight pm.' },
      { french: 'La radio', english: 'The radio', pronunciation: 'lah rah-dee-oh', example: 'J\'écoute la radio en voiture.', example_english: 'I listen to the radio in the car.' }
    ]
  },
  environment: {
    title: 'Environment & Nature',
    icon: 'Leaf',
    difficulty: 'advanced',
    cards: [
      { french: 'Le réchauffement climatique', english: 'Global warming', pronunciation: 'luh ray-shohf-mahn klee-mah-teek', example: 'Le réchauffement climatique est un problème mondial.', example_english: 'Global warming is a global problem.' },
      { french: 'La pollution', english: 'Pollution', pronunciation: 'lah poo-lee-syohn', example: 'La pollution de l\'air est dangereuse.', example_english: 'Air pollution is dangerous.' },
      { french: 'Les énergies renouvelables', english: 'Renewable energies', pronunciation: 'lay zay-nair-zhee ruh-noo-vlahbl', example: 'La France investit dans les énergies renouvelables.', example_english: 'France invests in renewable energy.' },
      { french: 'La biodiversité', english: 'Biodiversity', pronunciation: 'lah bee-oh-dee-vair-see-tay', example: 'La biodiversité est menacée.', example_english: 'Biodiversity is threatened.' },
      { french: 'Le recyclage', english: 'Recycling', pronunciation: 'luh ree-kleu-zhah', example: 'Le recyclage est obligatoire ici.', example_english: 'Recycling is mandatory here.' },
      { french: 'La déforestation', english: 'Deforestation', pronunciation: 'lah day-for-ess-tah-syohn', example: 'La déforestation détruit les forêts.', example_english: 'Deforestation destroys forests.' },
      { french: 'La sécheresse', english: 'Drought', pronunciation: 'lah say-sheh-ress', example: 'La sécheresse dure depuis des mois.', example_english: 'The drought has lasted for months.' },
      { french: 'L\'environnement', english: 'The environment', pronunciation: 'lahn-vee-ruhn-mahn', example: 'Protéger l\'environnement est essentiel.', example_english: 'Protecting the environment is essential.' },
      { french: 'Le gaspillage', english: 'Waste', pronunciation: 'luh gahs-pee-yahzh', example: 'Le gaspillage alimentaire est un problème.', example_english: 'Food waste is a problem.' },
      { french: 'Le développement durable', english: 'Sustainable development', pronunciation: 'luh day-vluhp-mahn doo-rahbl', example: 'Le développement durable est important.', example_english: 'Sustainable development is important.' }
    ]
  },
  politics: {
    title: 'Politics & Society',
    icon: 'Landmark',
    difficulty: 'advanced',
    cards: [
      { french: 'La démocratie', english: 'Democracy', pronunciation: 'lah day-moh-krah-see', example: 'La démocratie est un droit fondamental.', example_english: 'Democracy is a fundamental right.' },
      { french: 'Le gouvernement', english: 'The government', pronunciation: 'luh goovair-nuh-mahn', example: 'Le gouvernement a pris une décision.', example_english: 'The government made a decision.' },
      { french: 'L\'élection', english: 'The election', pronunciation: 'leh-lek-syohn', example: 'L\'élection aura lieu en juin.', example_english: 'The election will take place in June.' },
      { french: 'La loi', english: 'The law', pronunciation: 'lah lwah', example: 'La loi est stricte sur ce sujet.', example_english: 'The law is strict on this subject.' },
      { french: 'Le droit', english: 'The right/law', pronunciation: 'luh drwah', example: 'Chacun a le droit à la liberté.', example_english: 'Everyone has the right to freedom.' },
      { french: 'La liberté', english: 'Freedom', pronunciation: 'lah lee-behr-tay', example: 'La liberté est précieuse.', example_english: 'Freedom is precious.' },
      { french: 'L\'égalité', english: 'Equality', pronunciation: 'lay-gah-lee-tay', example: 'L\'égalité entre les femmes et les hommes.', example_english: 'Equality between women and men.' },
      { french: 'La fraternité', english: 'Fraternity', pronunciation: 'lah frah-tehr-nee-tay', example: 'Liberté, égalité, fraternité.', example_english: 'Liberty, equality, fraternity.' },
      { french: 'Le débat', english: 'The debate', pronunciation: 'luh day-bah', example: 'Le débat est très animé.', example_english: 'The debate is very heated.' },
      { french: 'La réforme', english: 'The reform', pronunciation: 'lah ray-form', example: 'La réforme est nécessaire.', example_english: 'The reform is necessary.' }
    ]
  },
  business: {
    title: 'Business & Finance',
    icon: 'TrendingUp',
    difficulty: 'advanced',
    cards: [
      { french: 'L\'investissement', english: 'Investment', pronunciation: 'lahn-vest-iss-mahn', example: 'L\'investissement est rentable.', example_english: 'The investment is profitable.' },
      { french: 'Le marché', english: 'The market', pronunciation: 'luh mahr-sheh', example: 'Le marché est en pleine croissance.', example_english: 'The market is booming.' },
      { french: 'Le bénéfice', english: 'The profit', pronunciation: 'luh bay-nay-fees', example: 'Le bénéfice a augmenté de 20%.', example_english: 'Profit increased by 20%.' },
      { french: 'La dette', english: 'The debt', pronunciation: 'lah det', example: 'La dette publique est élevée.', example_english: 'Public debt is high.' },
      { french: 'Le chiffre d\'affaires', english: 'Revenue/turnover', pronunciation: 'luh shee-fruh dah-fair', example: 'Le chiffre d\'affaires est en hausse.', example_english: 'Revenue is increasing.' },
      { french: 'L\'action', english: 'The stock/share', pronunciation: 'lak-syohn', example: 'Les actions ont baissé hier.', example_english: 'Stocks fell yesterday.' },
      { french: 'La banque', english: 'The bank', pronunciation: 'lah bahnk', example: 'Je vais à la banque pour un virement.', example_english: 'I\'m going to the bank for a transfer.' },
      { french: 'Le prêt', english: 'The loan', pronunciation: 'luh prahn', example: 'Le prêt a été approuvé.', example_english: 'The loan was approved.' },
      { french: 'L\'impôt', english: 'The tax', pronunciation: 'lahn-poh', example: 'Les impôts augmentent chaque année.', example_english: 'Taxes increase every year.' },
      { french: 'Le budget', english: 'The budget', pronunciation: 'luh booh-zheh', example: 'Le budget est serré cette année.', example_english: 'The budget is tight this year.' }
    ]
  },
  literature: {
    title: 'Literature & Arts',
    icon: 'Pen',
    difficulty: 'advanced',
    cards: [
      { french: 'Le roman', english: 'The novel', pronunciation: 'luh roh-mahn', example: 'Ce roman a gagné un prix.', example_english: 'This novel won a prize.' },
      { french: 'La poésie', english: 'Poetry', pronunciation: 'lah poh-ay-zee', example: 'J\'adore la poésie française.', example_english: 'I love French poetry.' },
      { french: 'Le théâtre', english: 'The theater', pronunciation: 'luh tay-ahtr', example: 'Nous allons au théâtre ce soir.', example_english: 'We\'re going to the theater tonight.' },
      { french: 'Le musée', english: 'The museum', pronunciation: 'luh moo-zay', example: 'Le musée est fermé le lundi.', example_english: 'The museum is closed on Mondays.' },
      { french: 'L\'œuvre', english: 'The work (of art)', pronunciation: 'loh-vruh', example: 'Cette œuvre est magnifique.', example_english: 'This work of art is magnificent.' },
      { french: 'Le personnage', english: 'The character', pronunciation: 'luh pair-soh-nahzh', example: 'Le personnage principal est courageux.', example_english: 'The main character is brave.' },
      { french: 'Le chapitre', english: 'The chapter', pronunciation: 'luh shah-peetr', example: 'J\'ai lu le premier chapitre.', example_english: 'I read the first chapter.' },
      { french: 'L\'auteur', english: 'The author', pronunciation: 'loh-tuhr', example: 'L\'auteur est très célèbre.', example_english: 'The author is very famous.' },
      { french: 'La scène', english: 'The scene/stage', pronunciation: 'lah seen', example: 'La scène est préparée.', example_english: 'The stage is set.' },
      { french: 'Le public', english: 'The audience', pronunciation: 'luh poo-bleek', example: 'Le public est enthousiaste.', example_english: 'The audience is enthusiastic.' }
    ]
  }
};
