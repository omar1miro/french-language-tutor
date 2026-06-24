export const MOCK_CHAT_ROLES = {
  cafe: {
    title: "Order Coffee",
    desc: "Order at a busy Parisian café.",
    icon: "cafe",
    system: "Polite cafe waiter",
    history: [
      {
        role: "tutor",
        tutor_french: "Bonjour ! Bienvenue au Café de Flore. Que puis-je vous servir aujourd'hui ?",
        english_translation: "Hello! Welcome to Cafe de Flore. What can I serve you today?",
        pronunciation: "bohn-zhoor ! byehn-vuh-noo oh kah-fay duh flor. kuh pwee-zhuh voo sair-veer oh-zhoor-dwee ?",
        user_correction: null
      }
    ],
    getResponse: (userInput) => {
      const input = userInput.toLowerCase();
      let correction = null;

      if (input.includes("je veux")) {
        correction = "Grammar Tip: In French restaurants, it's polite to say 'Je voudrais...' (I would like) rather than 'Je veux...' (I want).";
      }

      let reply = {
        tutor_french: "Pardon, je n'ai pas tout à fait compris. Souhaitez-vous commander un café ou un croissant ?",
        english_translation: "Sorry, I didn't quite understand. Would you like to order a coffee or a croissant?",
        pronunciation: "pahr-dohn, zhuh nay pah too tah feh kohm-pree. sweh-tay-voo koh-mahn-day uhn kah-fay oo uhn krwa-sahn ?",
        user_correction: correction
      };

      if (input.includes("café") || input.includes("croissant") || input.includes("commander")) {
        reply = {
          tutor_french: "Très bien. Un café et un croissant. Vous le voulez sur place ou à emporter ?",
          english_translation: "Very well. A coffee and a croissant. Do you want it here or to go?",
          pronunciation: "treh byehn. uhn kah-fay ay uhn krwa-sahn. voo luh voo-lay soor plahs oo ah ahn-por-tay ?",
          user_correction: correction
        };
      } else if (input.includes("place") || input.includes("emporter") || input.includes("ici")) {
        reply = {
          tutor_french: "Parfait. Ce sera 6 euros s'il vous plaît. Comment souhaitez-vous payer, par carte ou en espèces ?",
          english_translation: "Perfect. That will be 6 euros please. How would you like to pay, card or cash?",
          pronunciation: "pahr-feh. suh suh-rah sees uh-roh seel voo pleh. koh-mahn sweh-tay-voo peh-yay, pahr kahrt oo ahn ess-pess ?",
          user_correction: correction
        };
      } else if (input.includes("carte") || input.includes("espèces") || input.includes("paye")) {
        reply = {
          tutor_french: "Merci beaucoup ! Voici votre café chaud et votre croissant. Bonne dégustation !",
          english_translation: "Thank you very much! Here is your hot coffee and your croissant. Enjoy!",
          pronunciation: "mair-see boh-koo ! vwah-see vo-truh kah-fay sho ay vo-truh krwa-sahn. buhn day-goos-tah-syohn !",
          user_correction: correction
        };
      } else if (input.includes("l'addition") || input.includes("payer")) {
        reply = {
          tutor_french: "Certainement. Voici l'addition. Ça fait 6 euros au total. Merci !",
          english_translation: "Certainly. Here is the bill. That is 6 euros total. Thank you!",
          pronunciation: "sair-ten-mahn. vwah-see lah-dee-syohn. sah feh sees uh-roh oh toh-tahl. mair-see !",
          user_correction: correction
        };
      }
      return reply;
    }
  },
  friend: {
    title: "Meet a Friend",
    desc: "Chat with a friendly peer in a park.",
    icon: "friend",
    system: "Friendly local",
    history: [
      {
        role: "tutor",
        tutor_french: "Salut ! Je m'appelle Thomas. Je lisais un livre et j'ai vu que tu apprenais le français. Comment tu t'appelles ?",
        english_translation: "Hi! My name is Thomas. I was reading a book and saw you learning French. What is your name?",
        pronunciation: "sah-loo ! zhuh mah-pell toh-mah. zhuh lee-zeh uhn lee-vruh ay zhay voo kuh too ah-pruh-neh luh frahn-seh. koh-mahn too tah-pell ?",
        user_correction: null
      }
    ],
    getResponse: (userInput) => {
      const input = userInput.toLowerCase();
      let reply = {
        tutor_french: "C'est super ! J'adore ce parc. Qu'est-ce que tu étudies ou fais comme travail ?",
        english_translation: "That's great! I love this park. What do you study or do for work?",
        pronunciation: "say soo-pair ! zhah-dor suh pahrk. kess-kuh too ay-too-dee oo feh kohm trah-vye ?",
        user_correction: null
      };

      if (input.includes("suis") || input.includes("appelle") || input.includes("nom")) {
        reply = {
          tutor_french: "Enchanté ! D'où viens-tu ? Tu habites à Paris depuis longtemps ?",
          english_translation: "Nice to meet you! Where do you come from? Have you been living in Paris for a long time?",
          pronunciation: "ahn-shahn-tay ! doo vyeh-too ? too ah-beet ah pah-ree duh-pwee lohn-tehn ?",
          user_correction: null
        };
      } else if (input.includes("viens de") || input.includes("habite") || input.includes("pays") || input.includes("amérique") || input.includes("angleterre")) {
        reply = {
          tutor_french: "Ah, c'est magnifique ! J'aimerais beaucoup voyager là-bas un jour. Qu'est-ce que tu aimes faire pendant ton temps libre ?",
          english_translation: "Ah, that is magnificent! I would love to travel there one day. What do you like to do in your free time?",
          pronunciation: "ah, say mah-nyee-feek ! zheh-mreh boh-koo vwah-yah-zhay lah-bah uhn zhoor. kess-kuh too em fair pahn-dahn tohn tehn lee-bruh ?",
          user_correction: null
        };
      } else if (input.includes("aime") || input.includes("sport") || input.includes("musique") || input.includes("lire") || input.includes("cinéma")) {
        reply = {
          tutor_french: "Moi aussi ! On a beaucoup de points communs. C'était super cool de parler avec toi. À la prochaine !",
          english_translation: "Me too! We have a lot in common. It was super cool talking to you. See you next time!",
          pronunciation: "mwa oh-see ! ohn ah boh-koo duh pwehn koh-mehn. say-teh soo-per kool duh pahr-lay ah-vek twa. ah lah proh-shen !",
          user_correction: null
        };
      }
      return reply;
    }
  },
  airport: {
    title: "At the Airport",
    desc: "Check in for your flight at CDG.",
    icon: "airport",
    system: "Airport check-in agent",
    history: [
      {
        role: "tutor",
        tutor_french: "Bonjour. Bienvenue au comptoir d'Air France. Puis-je avoir votre passeport et votre billet de vol, s'il vous plaît ?",
        english_translation: "Hello. Welcome to the Air France counter. May I have your passport and flight ticket, please?",
        pronunciation: "bohn-zhoor. byehn-vuh-noo oh kohmp-twar dair frahns. pwee-zhuh ah-vwar vo-truh pahs-por ay vo-truh bee-yeh duh vohl, seel voo pleh ?",
        user_correction: null
      }
    ],
    getResponse: (userInput) => {
      const input = userInput.toLowerCase();
      let reply = {
        tutor_french: "Merci beaucoup. Votre vol est à l'heure. Avez-vous des bagages à enregistrer aujourd'hui ?",
        english_translation: "Thank you very much. Your flight is on time. Do you have luggage to register today?",
        pronunciation: "mair-see boh-koo. vo-truh vohl ay ah luhr. ah-vay-voo day bah-gahzh ah ahn-ruh-zhees-tray oh-zhoor-dwee ?",
        user_correction: null
      };

      if (input.includes("voici") || input.includes("passeport") || input.includes("tiens") || input.includes("donne")) {
        reply = {
          tutor_french: "Merci. Je vois votre réservation. Préférez-vous un siège côté hublot ou côté couloir ?",
          english_translation: "Thank you. I see your reservation. Do you prefer a window seat or an aisle seat?",
          pronunciation: "mair-see. zhuh vwah vo-truh ray-zair-vah-syohn. pray-fay-ray-voo uhn syezh koh-tay oo-bloh oo koh-tay koo-lwar ?",
          user_correction: null
        };
      } else if (input.includes("hublot") || input.includes("couloir") || input.includes("siège")) {
        reply = {
          tutor_french: "Entendu. J'ai configuré votre siège. Avez-vous besoin d'une étiquette pour votre bagage à main ?",
          english_translation: "Understood. I have configured your seat. Do you need a tag for your hand luggage?",
          pronunciation: "ahn-tahn-doo. zhay kohn-fee-goo-ray vo-truh syezh. ah-vay-voo buh-zwehn doon ay-tee-ket poor vo-truh bah-gahzh ah mehn ?",
          user_correction: null
        };
      } else if (input.includes("bagage") || input.includes("oui") || input.includes("non") || input.includes("sac")) {
        reply = {
          tutor_french: "Parfait. Voici votre carte d'embarquement. Votre vol part de la porte 24. Bon voyage !",
          english_translation: "Perfect. Here is your boarding pass. Your flight departs from gate 24. Have a nice trip!",
          pronunciation: "pahr-feh. vwah-see vo-truh kahrt dehn-bahr-kuh-mahn. vo-truh vohl pahr duh lah port vehnt-katr. bohn vwah-yahzh !",
          user_correction: null
        };
      }
      return reply;
    }
  },
  restaurant: {
    title: "At the Restaurant",
    desc: "Order a full meal at a bistro.",
    icon: "restaurant",
    system: "Polite restaurant waiter",
    history: [
      {
        role: "tutor",
        tutor_french: "Bonsoir ! Bienvenue au bistrot. Vous avez réservé ? Combien de personnes ?",
        english_translation: "Good evening! Welcome to the bistro. Do you have a reservation? How many people?",
        pronunciation: "bohn-swahr ! byehn-vuh-noo oh bee-stroh. voo zah-vay ray-zair-vay ? koh-mahn duh pahr-sohn ?",
        user_correction: null
      }
    ],
    getResponse: (userInput) => {
      const input = userInput.toLowerCase();
      let correction = null;

      if (input.includes("je veux") || input.includes("je veux un")) {
        correction = "Grammar Tip: Use 'Je voudrais...' (I would like) instead of 'Je veux...' (I want) when ordering at a restaurant. It's more polite.";
      }

      let reply = {
        tutor_french: "Bien sûr. Voici le menu. Avez-vous des allergies ? Je peux vous recommander le plat du jour.",
        english_translation: "Of course. Here is the menu. Do you have any allergies? I can recommend the daily special.",
        pronunciation: "byehn seer. vwah-see luh muh-noo. ah-vay-voo day zah-lair-zhee ? zhuh puh voo ruh-ko-mahn-day luh plah duh zhoor.",
        user_correction: correction
      };

      if (input.includes("menu") || input.includes("plat") || input.includes("recommand")) {
        reply = {
          tutor_french: "Le plat du jour, c'est le saumon grillé avec une salade verte et du riz. C'est délicieux ! Vous prenez ça ?",
          english_translation: "The daily special is grilled salmon with a green salad and rice. It's delicious! Shall I take your order?",
          pronunciation: "luh plah duh zhoor, say luh soh-mohn gree-lay ah-vek oon sah-lahd vert ay dew ree. say day-lee-syuh ! voo pruh-nay sah ?",
          user_correction: correction
        };
      } else if (input.includes("saumon") || input.includes("salade") || input.includes("oui") || input.includes("d'accord")) {
        reply = {
          tutor_french: "Excellent choix ! Et comme boisson ? Un verre de vin rouge, un soft drink, ou de l'eau ?",
          english_translation: "Excellent choice! And what to drink? A glass of red wine, a soft drink, or water?",
          pronunciation: "ek-say-lahn shwah ! ay kuhm bwah-sohn ? uhn vehr duh vahn roozh, uhn soft drink, oo duh loh ?",
          user_correction: correction
        };
      } else if (input.includes("vin") || input.includes("eau") || input.includes("boisson") || input.includes("coca")) {
        reply = {
          tutor_french: "Très bien. Je reviens tout de suite avec votre boisson. Bon appétit !",
          english_translation: "Very well. I'll be right back with your drink. Enjoy your meal!",
          pronunciation: "treh byehn. zhuh ruh-vee-ehn too sweet ah-vek vo-truh bwah-sohn. bohn ah-pay-tee !",
          user_correction: correction
        };
      } else if (input.includes("l'addition") || input.includes("addition") || input.includes("payer")) {
        reply = {
          tutor_french: "Voici l'addition. Ça fait 32 euros au total. Vous payez par carte ou en espèces ?",
          english_translation: "Here is the bill. That's 32 euros total. Do you pay by card or cash?",
          pronunciation: "vwah-see lah-dee-syohn. sah feh trahn-dee zeh-roh oh toh-tahl. voo peh-yay pahr kahrt oo ahn ess-pess ?",
          user_correction: correction
        };
      }
      return reply;
    }
  },
  shopping: {
    title: "Shopping in Paris",
    desc: "Buy clothes at a boutique.",
    icon: "shopping",
    system: "Friendly shop assistant",
    history: [
      {
        role: "tutor",
        tutor_french: "Bonjour ! Bienvenue dans notre boutique. Je peux vous aider ? Vous cherchez quelque chose en particulier ?",
        english_translation: "Hello! Welcome to our boutique. Can I help you? Are you looking for something in particular?",
        pronunciation: "bohn-zhoor ! byehn-vuh-noo dah noh-truh boo-teek. zhuh puh voo zay-day ? voo shair-shek kel-kuh shohz ahn par-tee-kuh-lyay ?",
        user_correction: null
      }
    ],
    getResponse: (userInput) => {
      const input = userInput.toLowerCase();
      let correction = null;

      if (input.includes("je veux") || input.includes("je veux un")) {
        correction = "Grammar Tip: Use 'Je cherche...' (I'm looking for) or 'Je voudrais...' (I would like) instead of 'Je veux...' (I want) when shopping.";
      }

      let reply = {
        tutor_french: "Bien sûr ! Nous avons de magnifiques articles. Vous cherchez un vêtement ou un accessoire ?",
        english_translation: "Of course! We have beautiful items. Are you looking for clothing or an accessory?",
        pronunciation: "byehn seer ! noo zah-vohn duh mah-nyee-feek ah-teekl. voo shair-shek uhn vay-tuh-mahn oo uhn ak-sesswahr ?",
        user_correction: correction
      };

      if (input.includes("vêtement") || input.includes("chemise") || input.includes("pantalon") || input.includes("robe")) {
        reply = {
          tutor_french: "Super ! Nous avons de très belles pièces. Quelle taille portez-vous ? Et quelle couleur préférez-vous ?",
          english_translation: "Great! We have very beautiful pieces. What size do you wear? And what color do you prefer?",
          pronunciation: "soo-pair ! noo zah-vohn duh treh bell pyess. kel tahy por-tay-voo ? ay kel koo-lur pray-fay-ray-voo ?",
          user_correction: correction
        };
      } else if (input.includes("taille") || input.includes("moyen") || input.includes("grand") || input.includes("petit")) {
        reply = {
          tutor_french: "Parfait. Essayez cette robe bleue. Elle est très à la mode et le tissu est doux. Allez dans la cabine d'essayage.",
          english_translation: "Perfect. Try on this blue dress. It's very fashionable and the fabric is soft. Go to the fitting room.",
          pronunciation: "pahr-feh. eh-say-yay set rob bluh. el ay treh ah lah mood ay luh tee-see oo ay doo. ah-lay dahn lah kah-been day-say-yahzh.",
          user_correction: correction
        };
      } else if (input.includes("robe") || input.includes("aime") || input.includes("joli") || input.includes("belle")) {
        reply = {
          tutor_french: "Elle vous va parfaitement ! C'est un très bon choix. Le prix est de 89 euros. Vous la prenez ?",
          english_translation: "It fits you perfectly! It's a very good choice. The price is 89 euros. Are you taking it?",
          pronunciation: "el voo vah pahr-feh-mahn ! say uhn treh bohn shwah. luh pree ay duhkatr-ohvahn-deez eh-roh. voo lah pruh-nay ?",
          user_correction: correction
        };
      } else if (input.includes("payer") || input.includes("carte") || input.includes("espèces") || input.includes("oui")) {
        reply = {
          tutor_french: "Excellent ! Je vous mets ça dans un sac cadeau. Merci pour votre achat et bonne journée !",
          english_translation: "Excellent! I'll put that in a gift bag. Thank you for your purchase and have a great day!",
          pronunciation: "ek-say-lahn ! zhuh voo met sah dahn uhn sah kah-doh. mair-see poor vo-truh ah-shah ay bohn zhoor-nay !",
          user_correction: correction
        };
      }
      return reply;
    }
  }
};
