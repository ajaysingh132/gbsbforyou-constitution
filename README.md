# GBSB4U Digital Parliament — Master Repository

## उद्देश्य
यह रिपॉज़िटरी GBSB4U Digital Parliament की मुख्य मोबाइल-अनुकूल UI और एकीकृत शासन-दस्तावेज़ों का केंद्रीय स्थान है। लक्ष्य संबंधित लगभग 35 GitHub repositories की समीक्षा करके, जरूरी UI और governance components को व्यवस्थित रूप से एक canonical repository में लाना है—बिना स्रोत कोड, अधिकार, सुरक्षा या deployment निर्भरताओं की जाँच किए किसी परियोजना को अंधाधुंध मिलाए।

## शासन का प्रस्तावित क्रम
**सामान्य सदस्य → सर्किल/समूह → स्थानीय शासन टीम → जिला प्रतिनिधित्व → मुख्य शासन टीम → टीम लीडर**

यह एक प्रस्तावित समुदाय-शासन मॉडल है। वास्तविक सदस्यता, चयन/निर्वाचन, भूमिकाएँ और अधिकार केवल समुदाय द्वारा स्वीकृत नियमों तथा उचित backend नियंत्रणों से निर्धारित होंगे। यह रिपॉज़िटरी स्वयं कोई सरकारी पोर्टल या वैधानिक संस्था नहीं है।

## मुख्य सुविधाएँ / UI क्षेत्र
- मुख्य पृष्ठ और डैशबोर्ड
- सर्किल/समूह और प्रतिनिधि
- शासन एवं प्रस्ताव
- बैठकें और कार्यवाही
- निर्णयों एवं अनुपालन की स्थिति
- लॉगिन/प्रवेश नियंत्रण
- भविष्य के मॉड्यूल: वार्षिक सामुदायिक अधिवेशन, क्षेत्रीय बंजारा नायक रिपोर्ट, सहकारी उद्यम प्रगति, आय-व्यय सारांश और सरकारी प्रस्ताव ट्रैकर

## एकीकृत दस्तावेज़
- [Core governance documents](docs/core/DIGITAL-PARLIAMENT-INDEX.md)
- [Community governance model](docs/core/COMMUNITY-GOVERNANCE-MODEL.md)
- [Parliament structure](docs/core/PARLIAMENT-STRUCTURE.md)
- [Decision model](docs/core/DECISION-MODEL.md)
- [Proposal lifecycle](docs/core/PROPOSAL-LIFECYCLE.md)
- [AI assistance rules](docs/core/AI-ASSISTANCE-RULES.md)
- [UI architecture](docs/ui-specs/UI-ARCHITECTURE.md)
- [Role permissions matrix](docs/ui-specs/ROLE-PERMISSIONS-MATRIX.md)
- [API boundary specification](docs/ui-specs/API-BOUNDARY-SPEC.md)
- [Governance white paper](docs/ui-specs/GBSB4U-GLOBAL-GOVERNANCE-WHITEPAPER.md)
- [Repository consolidation register](REPOSITORY-CONSOLIDATION-REGISTER.md)

## संबंधित परियोजनाएँ
- [NST — Nomadic Sahakari Tantra](https://github.com/ajaysingh132/Samadhi-NST-gbsbforyou-gbsbforyou-) — क्षेत्रीय बंजारा नायक, सहकारिता, वार्षिक अधिवेशन और समुदाय-समाधान प्रस्ताव।
- [Banjara Language Engine](https://ajaysingh132.github.io/Banjara-Language-Engine-BLE-v1.0/) — बंजारा भाषा की डिजिटल पहल।

इन परियोजनाओं का लिंक देना, उनके कोड या डेटाबेस का स्वतः एकीकरण होने का दावा नहीं है।

## सुरक्षा और शासन सिद्धांत
- AI विश्लेषण, सारांश और सूचना-सहायता दे सकता है; अंतिम सामुदायिक निर्णय मनुष्य और स्वीकृत प्रक्रिया से होंगे।
- भूमिकाएँ केवल frontend/login dropdown से तय नहीं होंगी; backend authorization आवश्यक है।
- Supabase service-role key या अन्य secret browser में प्रकाशित न करें।
- Live data mutation शुरू करने से पहले database schema और Row Level Security (RLS) सत्यापित हों।
- निजी सदस्य डेटा, पहचान-पत्र या संवेदनशील शिकायतें सार्वजनिक रिपॉज़िटरी में न रखें।
- निर्णय, कारण, कार्य-जिम्मेदारी और समीक्षा स्थिति दर्ज हों।

## वर्तमान स्थिति
यह **master consolidation का प्रारंभिक चरण** है। Core और UI specification दस्तावेज़ एकीकृत किए गए हैं। सभी लगभग 35 repositories के code, dependencies, deployment और license की जाँच अभी पूरी नहीं हुई है। पूर्णता का दावा तभी किया जाएगा जब [consolidation register](REPOSITORY-CONSOLIDATION-REGISTER.md) में सभी स्रोतों की स्थिति सत्यापित हो और mobile workflows परीक्षण पास करें।

## Deployment
GitHub Pages या अन्य hosting में बदलाव से पहले मौजूदा deployment और configuration की जाँच करें। Supabase credentials और अन्य secrets को सुरक्षित configuration में रखें। बदलावों को छोटे commits में करें और live deployment के बाद मोबाइल पर परीक्षण करें.
