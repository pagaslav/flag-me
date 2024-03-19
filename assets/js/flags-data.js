// Array of objects containing flag information
const flagsDataArray = [{
        image: "assets/images/flags/gr.svg",
        country: "Greece",
        description: "Greece is known for its rich history and cultural heritage. It is often referred to as the cradle of Western civilization, being the birthplace of democracy, Western philosophy, and the Olympic Games.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/at.svg",
        country: "Austria",
        description: "Austria is famous for its stunning Alpine scenery, historic cities, and cultural events. It is home to classical composers such as Mozart, Beethoven, and Strauss.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/au.svg",
        country: "Australia",
        description: "Australia is known for its unique wildlife, including kangaroos and koalas, as well as its stunning natural landscapes such as the Great Barrier Reef and Uluru.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/be.svg",
        country: "Belgium",
        description: "Belgium is famous for its chocolates, waffles, and beer. It is also home to the headquarters of the European Union and NATO.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/br.svg",
        country: "Brazil",
        description: "Brazil is the largest country in South America and is known for its vibrant culture, diverse ecosystems including the Amazon Rainforest, and iconic landmarks like Christ the Redeemer in Rio de Janeiro.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/by.svg",
        country: "Belarus",
        description: "Belarus is often referred to as Europe's last dictatorship. It is known for its beautiful landscapes, rich history, and Soviet-era architecture.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/ca.svg",
        country: "Canada",
        description: "Canada is renowned for its stunning natural beauty, multiculturalism, and outdoor recreational activities such as skiing, hiking, and kayaking.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/ch.svg",
        country: "Switzerland",
        description: "Switzerland is famous for its picturesque landscapes, including the Swiss Alps and pristine lakes. It is also known for its banking sector and delicious chocolate.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/cn.svg",
        country: "China",
        description: "China is one of the world's oldest civilizations and is known for its rich cultural heritage, including the Great Wall, Forbidden City, and Terracotta Army.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/co.svg",
        country: "Colombia",
        description: "Colombia is famous for its coffee, emeralds, and diverse ecosystems ranging from the Andes Mountains to the Amazon Rainforest. It is also known for its vibrant music and dance culture.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/cz.svg",
        country: "Czech Republic",
        description: "The Czech Republic is known for its stunning architecture, historic castles, and delicious beer. Prague, the capital, is often called the 'City of a Hundred Spires.'",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/de.svg",
        country: "Germany",
        description: "Germany is famous for its precision engineering, high-quality automobiles, and rich cultural history. It is home to famous composers such as Beethoven, Bach, and Wagner.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/dk.svg",
        country: "Denmark",
        description: "Denmark is known for its progressive social policies, design innovations, and fairy-tale castles. It is also famous for its pastries, especially the Danish 'smørrebrød' (open-faced sandwiches).",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/es.svg",
        country: "Spain",
        description: "Spain is famous for its vibrant culture, delicious cuisine, and stunning architecture. It is home to iconic landmarks such as the Sagrada Familia and Alhambra Palace.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/fi.svg",
        country: "Finland",
        description: "Finland is known for its stunning natural landscapes, including thousands of lakes, forests, and the magical Northern Lights. It is also famous for its sauna culture.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/fr.svg",
        country: "France",
        description: "France is famous for its art, fashion, cuisine, and wine. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Palace of Versailles.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/gb.svg",
        country: "United Kingdom",
        description: "The United Kingdom is known for its historic landmarks, cultural contributions, and monarchy. It includes England, Scotland, Wales, and Northern Ireland.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/hu.svg",
        country: "Hungary",
        description: "Hungary is famous for its thermal baths, rich history, and delicious cuisine. Budapest, the capital, is known for its stunning architecture and vibrant nightlife.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/ie.svg",
        country: "Ireland",
        description: "Ireland is known for its lush green landscapes, friendly people, and rich literary heritage. It is famous for its pubs, Guinness beer, and traditional music.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/il.svg",
        country: "Israel",
        description: "Israel is known for its religious significance, ancient history, and diverse culture. It is home to sacred sites for Judaism, Christianity, and Islam.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/in.svg",
        country: "India",
        description: "India is known for its colorful festivals, diverse culture, and historical landmarks such as the Taj Mahal and Red Fort. It is also famous for its spicy cuisine and Bollywood films.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/is.svg",
        country: "Iceland",
        description: "Iceland is known for its stunning landscapes, including volcanoes, glaciers, and geothermal hot springs. It is also famous for the Northern Lights and unique Icelandic sagas.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/it.svg",
        country: "Italy",
        description: "Italy is famous for its rich history, art, architecture, and cuisine. It is home to iconic landmarks such as the Colosseum, Leaning Tower of Pisa, and Vatican City.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/jp.svg",
        country: "Japan",
        description: "Japan is known for its blend of traditional and modern culture, stunning natural landscapes, and technological innovations. It is famous for sushi, anime, and cherry blossoms.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/kp.svg",
        country: "North Korea",
        description: "North Korea is known for its secretive regime, political tension, and strict control over information. It is one of the most isolated and closed-off countries in the world.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/kr.svg",
        country: "South Korea",
        description: "South Korea is known for its vibrant pop culture, delicious cuisine (including kimchi and bulgogi), and innovative technology companies like Samsung and LG.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/nl.svg",
        country: "Netherlands",
        description: "The Netherlands is known for its picturesque canals, windmills, and tulip fields. It is also famous for its cycling culture and vibrant art scene, including the works of Rembrandt and Van Gogh.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/no.svg",
        country: "Norway",
        description: "Norway is famous for its stunning fjords, picturesque landscapes, and outdoor activities such as hiking, skiing, and fishing. It is also known for its Viking heritage and polar bears.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/nz.svg",
        country: "New Zealand",
        description: "New Zealand is known for its breathtaking natural beauty, including mountains, beaches, and fjords. It is also famous for adventure sports like bungee jumping and its indigenous Maori culture.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/ru.svg",
        country: "Russia",
        description: "Russia is the largest country in the world, known for its rich history, iconic architecture, and diverse landscapes stretching from forests to tundra. It is famous for ballet, literature, and vodka.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/se.svg",
        country: "Sweden",
        description: "Sweden is known for its stunning natural landscapes, progressive social policies, and contributions to music, design, and technology. It is also famous for IKEA and ABBA.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/tr.svg",
        country: "Turkey",
        description: "Turkey is known for its rich cultural heritage, including historic sites like the Hagia Sophia and Ephesus, as well as its delicious cuisine and vibrant bazaars.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/ua.svg",
        country: "Ukraine",
        description: "Ukraine is known for its diverse landscapes, from the Carpathian Mountains to the Black Sea coast. It is also famous for its rich history, vibrant folk traditions, and delicious cuisine like borscht and varenyky.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/us.svg",
        country: "United States",
        description: "The United States is known for its diverse culture, iconic landmarks, and contributions to technology, entertainment, and popular culture. It is home to Hollywood, Silicon Valley, and the Statue of Liberty.",
        difficulty: "Easy"
    },
    {
        image: "assets/images/flags/ae.svg",
        country: "United Arab Emirates",
        description: "The United Arab Emirates is known for its futuristic architecture, luxury shopping, and vibrant nightlife. It is home to iconic landmarks such as the Burj Khalifa, the world's tallest building.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/al.svg",
        country: "Albania",
        description: "Albania is known for its stunning beaches, ancient history, and vibrant culture. It is home to UNESCO World Heritage sites, including the ancient city of Butrint and Gjirokastër Castle.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/am.svg",
        country: "Armenia",
        description: "Armenia is known for its rich history, ancient monasteries, and breathtaking landscapes. It is famous for landmarks such as Mount Ararat, the symbol of the Armenian nation.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ar.svg",
        country: "Argentina",
        description: "Argentina is known for its passion for football, tango music and dance, and delicious cuisine including juicy steaks and Malbec wine. It boasts diverse landscapes, from the Andes Mountains to the Patagonian glaciers.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/bg.svg",
        country: "Bulgaria",
        description: "Bulgaria is known for its stunning Black Sea coast, historic cities, and vibrant festivals. It is home to ancient Thracian ruins, Orthodox monasteries, and picturesque mountain ranges.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/bm.svg",
        country: "Bermuda",
        description: "Bermuda is known for its pink-sand beaches, crystal-clear waters, and vibrant coral reefs. It is famous for its shipwrecks, golf courses, and the mysterious Bermuda Triangle.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/bo.svg",
        country: "Bolivia",
        description: "Bolivia is known for its stunning landscapes, including the Andes Mountains, Amazon rainforest, and Salar de Uyuni, the world's largest salt flat. It is rich in indigenous culture and traditions.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/cf.svg",
        country: "Central African Republic",
        description: "The Central African Republic is known for its diverse wildlife, including elephants, gorillas, and leopards. It is home to UNESCO World Heritage sites like Manovo-Gounda St. Floris National Park.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/cl.svg",
        country: "Chile",
        description: "Chile is known for its stunning landscapes, including the Atacama Desert, Patagonia, and Easter Island. It is famous for its wine regions, cultural festivals, and vibrant street art.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/cu.svg",
        country: "Cuba",
        description: "Cuba is known for its colorful colonial architecture, vintage cars, and lively music and dance scene. It boasts stunning beaches, lush tobacco fields, and historic landmarks like the Old Havana.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/cy.svg",
        country: "Cyprus",
        description: "Cyprus is known for its beautiful beaches, ancient ruins, and delicious cuisine influenced by Greek and Turkish flavors. It is home to historic sites like the ancient city of Kourion and the Tombs of the Kings.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/do.svg",
        country: "Dominican Republic",
        description: "The Dominican Republic is known for its stunning beaches, lush rainforests, and vibrant culture. It is famous for its merengue and bachata music, as well as its historic colonial architecture.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ee.svg",
        country: "Estonia",
        description: "Estonia is known for its charming medieval towns, vibrant art scene, and innovative digital infrastructure. It is home to UNESCO World Heritage sites like Tallinn's Old Town and the Struve Geodetic Arc.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/eg.svg",
        country: "Egypt",
        description: "Egypt is known for its ancient civilization, iconic landmarks such as the Pyramids of Giza and the Sphinx, and vibrant culture. It boasts millennia of history, fascinating mythology, and stunning Nile River cruises.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/fj.svg",
        country: "Fiji",
        description: "Fiji is known for its stunning coral reefs, palm-fringed beaches, and crystal-clear waters. It is famous for its warm hospitality, traditional Fijian culture, and world-class diving and snorkeling.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ge.svg",
        country: "Georgia",
        description: "Georgia is known for its breathtaking landscapes, rich history, and delicious cuisine. It is famous for its wine regions, ancient churches, and the stunning Caucasus Mountains.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/hk.svg",
        country: "Hong Kong",
        description: "Hong Kong is known for its impressive skyline, bustling street markets, and delicious Cantonese cuisine. It is famous for its vibrant nightlife, iconic Victoria Harbour, and historic landmarks like the Tian Tan Buddha.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/hr.svg",
        country: "Croatia",
        description: "Croatia is known for its stunning Adriatic coastline, historic cities, and picturesque islands. It is famous for its medieval architecture, crystal-clear waters, and Game of Thrones filming locations.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/io.svg",
        country: "British Indian Ocean Territory",
        description: "The British Indian Ocean Territory is known for its remote location, stunning coral reefs, and pristine beaches. It is home to the world-famous Chagos Archipelago and diverse marine life.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/iq.svg",
        country: "Iraq",
        description: "Iraq is known for its ancient Mesopotamian history, rich cultural heritage, and diverse landscapes. It boasts historic sites like the ancient city of Babylon and the Mesopotamian Marshes.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ir.svg",
        country: "Iran",
        description: "Iran is known for its stunning architecture, rich history, and warm hospitality. It is famous for landmarks such as the ancient city of Persepolis, the Golestan Palace, and the Imam Reza Shrine.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/li.svg",
        country: "Liechtenstein",
        description: "Liechtenstein is known for its stunning Alpine landscapes, medieval castles, and vibrant cultural scene. It is famous for its outdoor activities, including skiing, hiking, and mountain biking.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/lt.svg",
        country: "Lithuania",
        description: "Lithuania is known for its rich history, beautiful Baltic coastline, and charming medieval towns. It is famous for its wooden architecture, traditional festivals, and the stunning Curonian Spit.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/lu.svg",
        country: "Luxembourg",
        description: "Luxembourg is known for its picturesque landscapes, medieval castles, and vibrant cultural scene. It is famous for its charming capital city, Luxembourg City, and its status as a global financial hub.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/md.svg",
        country: "Moldova",
        description: "Moldova is known for its scenic vineyards, historic monasteries, and warm hospitality. It is famous for its wine production, traditional cuisine, and cultural festivals.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/mt.svg",
        country: "Malta",
        description: "Malta is known for its rich history, stunning Mediterranean coastline, and vibrant festivals. It is famous for its ancient temples, medieval towns, and crystal-clear waters for diving.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/mx.svg",
        country: "Mexico",
        description: "Mexico is known for its vibrant culture, delicious cuisine, and stunning landscapes. It boasts ancient ruins, colonial cities, beautiful beaches, and UNESCO World Heritage sites like Chichen Itza.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ph.svg",
        country: "Philippines",
        description: "The Philippines is known for its stunning beaches, crystal-clear waters, and vibrant festivals. It is famous for its diverse marine life, delicious cuisine, and UNESCO World Heritage sites like the Rice Terraces of the Philippine Cordilleras.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/pl.svg",
        country: "Poland",
        description: "Poland is known for its rich history, medieval architecture, and picturesque countryside. It boasts vibrant cities like Warsaw and Krakow, as well as stunning natural landscapes like the Tatra Mountains.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/pt.svg",
        country: "Portugal",
        description: "Portugal is known for its stunning coastline, historic cities, and delicious cuisine. It boasts landmarks like the Belem Tower, the Algarve's golden beaches, and the historic neighborhoods of Lisbon.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ro.svg",
        country: "Romania",
        description: "Romania is known for its medieval castles, stunning Carpathian Mountains, and vibrant folklore. It is famous for landmarks like Bran Castle, the painted monasteries of Bucovina, and the Transfagarasan Highway.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/rs.svg",
        country: "Serbia",
        description: "Serbia is known for its rich history, vibrant culture, and stunning natural landscapes. It boasts medieval monasteries, vibrant festivals, and charming cities like Belgrade and Novi Sad.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/sa.svg",
        country: "Saudi Arabia",
        description: "Saudi Arabia is known for its rich history, ancient archaeological sites, and vibrant culture. It is famous for landmarks like the UNESCO World Heritage site of Al-Hijr, the Nabatean city of Mada'in Saleh, and the futuristic city of Riyadh.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/si.svg",
        country: "Slovenia",
        description: "Slovenia is known for its stunning Alpine landscapes, charming cities, and outdoor activities. It boasts medieval castles, crystal-clear rivers, and the picturesque Lake Bled.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/sk.svg",
        country: "Slovakia",
        description: "Slovakia is known for its stunning natural landscapes, medieval castles, and vibrant folklore. It is famous for the High Tatras mountains, traditional wooden churches, and the historic capital city of Bratislava.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/th.svg",
        country: "Thailand",
        description: "Thailand is known for its stunning beaches, ornate temples, and delicious cuisine. It boasts vibrant cities like Bangkok, historic ruins like Ayutthaya, and lush rainforests teeming with wildlife.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/vn.svg",
        country: "Vietnam",
        description: "Vietnam is known for its stunning landscapes, rich history, and delicious cuisine. It boasts UNESCO World Heritage sites like Halong Bay, historic cities like Hanoi and Ho Chi Minh City, and vibrant street food culture.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/xk.svg",
        country: "Kosovo",
        description: "Kosovo is known for its stunning mountains, historic monuments, and warm hospitality. It is famous for landmarks like the UNESCO World Heritage site of the Medieval Monuments in Kosovo and the vibrant capital city of Pristina.",
        difficulty: "Medium"
    },
    {
        image: "assets/images/flags/ad.svg",
        country: "Andorra",
        description: "Andorra is known for its stunning Pyrenees mountains, ski resorts, and duty-free shopping. It is famous for its charming villages, hiking trails, and the Romanesque Sant Joan de Caselles church.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/af.svg",
        country: "Afghanistan",
        description: "Afghanistan is known for its rugged landscapes, ancient history, and diverse culture. It is famous for landmarks like the historic city of Kabul, the Buddhas of Bamyan, and the Hindu Kush mountains.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ag.svg",
        country: "Antigua and Barbuda",
        description: "Antigua and Barbuda are known for their stunning beaches, crystal-clear waters, and vibrant marine life. They are famous for landmarks like Nelson's Dockyard, Shirley Heights, and the beautiful Devil's Bridge.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ai.svg",
        country: "Anguilla",
        description: "Anguilla is known for its pristine beaches, turquoise waters, and luxurious resorts. It is famous for its stunning coral reefs, white-sand beaches, and laid-back Caribbean vibe.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ao.svg",
        country: "Angola",
        description: "Angola is known for its diverse wildlife, beautiful beaches, and rich cultural heritage. It boasts natural wonders like the Kalandula Falls, as well as historic sites like the Fortaleza de São Miguel.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/aq.svg",
        country: "Antarctica",
        description: "Antarctica is known for its icy landscapes, unique wildlife, and extreme weather conditions. It is famous for its penguin colonies, towering icebergs, and the South Pole.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ba.svg",
        country: "Bosnia and Herzegovina",
        description: "Bosnia and Herzegovina are known for their stunning landscapes, historic cities, and cultural diversity. They boast landmarks like the Stari Most bridge, the historic town of Mostar, and the beautiful Plitvice Lakes National Park.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/bh.svg",
        country: "Bahrain",
        description: "Bahrain is known for its modern architecture, historic sites, and vibrant culture. It is famous for landmarks like the Bahrain Fort, the Al Fateh Grand Mosque, and the ancient Dilmun burial mounds.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/bw.svg",
        country: "Botswana",
        description: "Botswana is known for its vast wilderness areas, including the Okavango Delta, Chobe National Park, and the Kalahari Desert. It is famous for its rich biodiversity, diverse ecosystems, and abundant wildlife.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ci.svg",
        country: "Côte d'Ivoire",
        description: "Côte d'Ivoire is known for its diverse culture, vibrant music scene, and beautiful beaches. It boasts landmarks like the Basilica of Our Lady of Peace, Tai National Park, and the vibrant markets of Abidjan.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/cv.svg",
        country: "Cape Verde",
        description: "Cape Verde is known for its stunning beaches, volcanic landscapes, and vibrant Creole culture. It is famous for its music, including the melancholic morna and lively coladeira.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ec.svg",
        country: "Ecuador",
        description: "Ecuador is known for its stunning landscapes, including the Galapagos Islands, the Amazon rainforest, and the Andes Mountains. It is famous for its biodiversity, indigenous culture, and historic cities like Quito.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/er.svg",
        country: "Eritrea",
        description: "Eritrea is known for its diverse landscapes, including the Dahlak Archipelago, Danakil Depression, and the Red Sea coast. It boasts ancient ruins, vibrant markets, and colorful coral reefs.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/fm.svg",
        country: "Micronesia",
        description: "Micronesia is known for its stunning coral reefs, pristine beaches, and vibrant culture. It boasts ancient ruins, traditional festivals, and some of the best diving and snorkeling spots in the world.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/gl.svg",
        country: "Greenland",
        description: "Greenland is known for its breathtaking landscapes, including glaciers, fjords, and icebergs. It is famous for its indigenous Inuit culture, Arctic wildlife, and the Northern Lights.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/hn.svg",
        country: "Honduras",
        description: "Honduras is known for its stunning Caribbean beaches, ancient Mayan ruins, and lush rainforests. It is famous for landmarks like the Copan Ruins, Roatan Island, and the Bay Islands.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/im.svg",
        country: "Isle of Man",
        description: "The Isle of Man is known for its rugged coastline, medieval castles, and annual TT motorcycle race. It boasts stunning landscapes, historic sites, and a rich Viking heritage.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/lk.svg",
        country: "Sri Lanka",
        description: "Sri Lanka is known for its stunning beaches, ancient ruins, and diverse wildlife. It boasts landmarks like Sigiriya Rock Fortress, Temple of the Tooth, and the picturesque tea plantations of Nuwara Eliya.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/lv.svg",
        country: "Latvia",
        description: "Latvia is known for its charming old towns, stunning Art Nouveau architecture, and pristine nature reserves. It is famous for landmarks like Riga's Old Town, Jurmala beach, and the Gauja National Park.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/ma.svg",
        country: "Morocco",
        description: "Morocco is known for its vibrant souks, ancient cities, and stunning desert landscapes. It boasts landmarks like the bustling Djemaa el-Fna square, the Atlas Mountains, and the colorful markets of Marrakech.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/mc.svg",
        country: "Monaco",
        description: "Monaco is known for its glamorous casinos, luxury yachts, and prestigious Grand Prix motor race. It is famous for its opulent hotels, elegant boutiques, and the stunning Prince's Palace.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/mk.svg",
        country: "North Macedonia",
        description: "North Macedonia is known for its historic cities, stunning lakes, and vibrant bazaars. It boasts landmarks like Lake Ohrid, the ancient city of Skopje, and the colorful Old Bazaar.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/mv.svg",
        country: "Maldives",
        description: "The Maldives is known for its stunning coral reefs, crystal-clear waters, and luxurious overwater bungalows. It boasts some of the best diving and snorkeling spots in the world, as well as pristine beaches and vibrant marine life.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/my.svg",
        country: "Malaysia",
        description: "Malaysia is known for its stunning beaches, lush rainforests, and vibrant cultural diversity. It boasts landmarks like the Petronas Twin Towers, the historic city of Malacca, and the beautiful islands of Langkawi.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/tw.svg",
        country: "Taiwan",
        description: "Taiwan is known for its modern cities, traditional temples, and stunning natural landscapes. It boasts landmarks like Taipei 101, Sun Moon Lake, and Taroko Gorge National Park.",
        difficulty: "Hard"
    },
    {
        image: "assets/images/flags/va.svg",
        country: "Vatican City",
        description: "Vatican City is known for being the smallest independent state in the world and the spiritual center of the Catholic Church. It is famous for landmarks like St. Peter's Basilica, the Vatican Museums, and the Sistine Chapel.",
        difficulty: "Hard"
    }
];

export default flagsDataArray;