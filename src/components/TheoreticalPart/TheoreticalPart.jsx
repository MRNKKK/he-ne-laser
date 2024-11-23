import "./TheoreticalPart.css";
import "katex/dist/katex.min.css";
import heneImage from "../../assets/theoreticallaser/hene.jpg";
import schemeImage from "../../assets/theoreticallaser/scheme.jpg";
import findAngle from "../../assets/theoreticallaser/findangle.jpg";
import schemelaserImage from "../../assets/theoreticallaser/schemelaser.jpg";
import LanguageContext from '../../providers/LanguageContext';
import React, { useEffect, useRef, useContext } from 'react';
import katex from 'katex';
import { Link } from 'react-router-dom';

const Formula = ({ equation }) => {
  const formulaRef = useRef(null);

  useEffect(() => {
    if (formulaRef.current) {
      katex.render(equation, formulaRef.current, {
        throwOnError: false,
      });
    }
  }, [equation]);

  return <span ref={formulaRef}></span>;
};

function TheoreticalPart() {

  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="theoretical-part">
      <h1>{isEnglish 
         ? 'Theoretical information. Laboratory work “Study of a helium-neon laser.' 
        : 'Теоретичні відомості. Лабораторна робота "Вивчення гелій-неонового лазера.'}</h1>
        <p
          dangerouslySetInnerHTML={{
          __html: isEnglish
          ? 'In laboratory work, quantum systems (atoms, molecules, ions) are used that can be in sharp energy states, which are usually characterized by energy levels. In the ground (stationary) state, particles of matter have a minimum energy, which corresponds to the ground energy level. A quantum system, such as an atom, can stay in this state for a long time. When energy is absorbed from the outside, the atoms of a substance go into an excited state, i.e. to a higher energy level. The time spent by an atom in an excited state is limited and is approximately 10<sup>-8</sup> seconds. However, there are excited states with a relatively longer “lifetime” (about 103 seconds), which are called metastable, and their corresponding energy levels are called metastable levels'
          : 'В роботі використовуються квантові системи (атоми, молекули, іони) які можуть знаходитись в різних енергетичних станах, які прийнято характеризувати енергетичними рівнями. В основному (стаціонарному) стані частинки речовини мають мінімальну енергію, якій відповідає основний енергетичний рівень. В цьому стані квантова система, наприклад атом, може знаходитись тривалий час. При поглинанні енергії ззовні атоми речовини переходять в збуджений стан, тобто на вищий енергетичний рівень. Час перебування атома в збудженому стані обмежений і складає приблизно 10 <sup>-8</sup> секунди. Проте існують збуджені стани з відносно більшим часом "життя"(порядку 10<sup>3</sup> секунди), які називаються метастабільними, а відповідні їм енергетичні рівні - метастабільними рівнями.'}}
          > 
        </p>

        <p>
          {isEnglish
          ? 'Transitions of excited atoms of matter from higher to lower energy levels are accompanied by the emission of energy quanta. These transitions can be spontaneous (self-induced) or induced (forced). The radiation that occurs during these transitions is called spontaneous or induced, respectively. Spontaneous radiation is caused by the transition of atoms from one energy state to another under the influence of internal factors and is random.'
          : 'Переходи збуджених атомів речовини з вищих енергетичних рівнів на нижчі супроводжуються випромінюванням квантів енергії. Ці переходи можуть бути спонтанними (самодовільними) або індукованими (вимушеними). Випромінювання, яке виникає при зазначених переходах, називається відповідно спонтанним або індукованим. Спонтанне випромінювання зумовлене переходом атомів із одного енергетичного стану в інший під впливом внутрішніх факторів і має випадковий характер'}
        </p>

        <p>
          {isEnglish
          ? ''
          : 'Індуковане або вимушене випромінювання виникає в результаті дії на збуджені атоми фотонів зовнішнього електромагнітного поля або фотонів, які з`явились в середовищі внаслідок спонтанного випромінювання. Характерно, що фотон індукованого випромінювання співпадає по частоті, фазі і напрямку руху з фотоном, який викликав вимушений перехід збудженого атома на більш низький енергетичний рівень. Отже, електромагнітні хвилі, які виникають при індукованому випромінюванні, являються когерентними.'}
        </p>

        <p>
          {isEnglish
          ? 'During an induced transition, the number of photons doubles, which can cause subsequent forced transitions, and so on. There is an avalanche-like process of increasing the number of identical photons, which leads to the generation of powerful coherent radiation. This process is possible only in active media. Such environments contain active elements (atoms, molecules, ions) in which, under certain conditions, it is possible to create a repopulation of higher energy levels compared to lower ones. In ordinary environments, even in an excited quantum system, the opposite is true, i.e., there are fewer atoms, molecules, or ions at higher energy levels than at lower ones. Therefore, the excited state of active elements is called the state of inverse population.'
          : 'При індукованому переході подвоюється число фотонів, які можуть стати причиною наступних вимушених переходів і так далі. Відбувається лавиноподібний процес збільшення кількості однакових фотонів, що приводить до генерації потужного когерентного випромінювання. Розглянутий процес можливий лише в активних середовищах. В таких середовищах містяться активні елементи (атоми, молекули, іони), в яких при певних умовах можна створити перезаселеність вищих енергетичних рівнів в порівнянні з нижчими. У звичайних середовищах навіть в збудженій квантовій системі спостерігається зворотна картина, тобто, на вищих енергетичних рівнях знаходиться менше атомів, молекул чи іонів, ніж на нижчих. Тому збуджений стан активних елементів називається станом інверсної заселеності.'}
        </p>

        <p>
          {isEnglish
          ? 'The active medium (active substance) is capable of generating coherent monochromatic radiation of high power through induced transitions in active elements. Devices that produce such radiation in the optical wavelength range are called optical quantum generators - lasers. Depending on the nature of the active substance and the method of its excitation, crystal, gas, liquid, semiconductor, and chemical lasers are distinguished'
          :'Активне середовище (активна речовина) шляхом індукованих переходів в активних елементах здатне генерувати когерентне монохроматичне випромінювання великої потужності. Пристрої, які дозволяють одержувати таке випромінювання в оптичному діапазоні довжин хвиль, отримали назву оптичних квантових генераторів - лазерів. В залежності від природи активної речовини та способу її збудження розрізняють кристалічні, газові, рідинні, напівпровідникові й хімічні лазери.'}
        </p>

        <p>
          {isEnglish
          ? 'In this work, a continuous-phase helium-neon laser is used, in which the active medium is a mixture of Ne and Ne. Its operation is based on the interaction of atoms of two gases that have close energy levels. Thus, the energy of level 2 of helium is quite close to the energy of level 3 of neon (Fig. 1.1).'
          : 'В даній роботі використовується гелій-неоновий лазер безперервної дії, в якому активним середовищем є суміш Не і Не. В основу його роботи покладено взаємодію атомів двох газів, які мають близькі енергетичні рівні. Так, енергія рівня 2 гелію досить близька до енергії рівня 3 неону (рис. 1.1).'}
        </p>

        <div className="image-container">
          <img src={heneImage} alt="Гелій-неоновий лазер" />
          <p className="image-caption">{isEnglish ? 'Figure 1.1 - Helium-neon laser' : 'Рисунок 1.1 - Гелій-неоновий лазер'}</p>
        </div>
        
        <p>
          {isEnglish
          ? 'Excited by an electric discharge in the laser tube, helium atoms move from the ground level 1 to the energy level 2. In the process of inelastic collision between the atoms of the gas mixture, the excited helium atoms transfer their energy to the neon atoms and return to the ground state without radiation. The neon atoms, having received energy from the helium atoms, move from the ground state 1 to the energy level 3, which is metastable. Thus, gallium atoms ensure the repopulation of neon level 3 with respect to level 2. This process is facilitated by the selection of optimal values of the partial pressures of helium (1 mm Hg) and neon (0.1 mm Hg) in the gas discharge tube'
          :'Збуджені за допомогою електричного розряду в трубці лазера атоми гелію переходять з основного рівня 1 на енергетичний рівень 2. В процесі непружного співударяння між атомами газової суміші збуджені атоми гелію передають свою енергію атомам неону, а самі повертаються в основний стан без випромінювання. Атоми неону, одержавши енергію від атомів гелію, переходять з основного різня 1 на енергетичний рівень 3, який є метастабільним. Цим самим атоми галію забезпечують перезаселеність рівня 3 неону по відношенню до рівня 2. Цьому процесу сприяє підбір оптимальних значень парціальних тисків гелію (1 мм рт.ст.) і неону (0,1 мм рт.ст.) в газорозрядній трубці.'}
        </p>

        <p>
          {isEnglish
          ? 'Hence, helium atoms contribute to the creation of an inverse population state of neon atoms, which is the active element in the active medium of a helium-neon laser.Initially, the induced transitions of neon atoms from level 3 to level 2 are caused by photons that have appeared as a result of spontaneous radiation, and then the induced photons are included in the process. The transition of the neon fatigue from level 2 to level 1 is carried out without radiation with the transfer of energy through collisions with other atoms and the walls of the gas discharge tube.The dimensions of the tube are selected to promote the unloading of level 2 and thereby maintain the state of inverse population of neon atoms, that is, that there are more atoms on level 3 than on level 2.The schematic diagram of the gas laser is shown in Figure 1.2.'
          : 'Отже, атоми гелію сприяють створенню стану інверсної заселеності атомів неону, який є активних елементом з активному середовищі гелій-неонового лазера.Спочатку індуковані переходи атоміо неону з рівня 3 на рівень 2 викликаються фотонами, які з`явились внаслідок спонтанного випромінювання, а потім в процес включаються індуковані фотони. Перехід втомі неону з рівня 2 на рівень 1 здійснюється без випромінювання з передачею енергії через зіткнення іншим атомам та стінкам газорозрядної трубки.Розміри трубки підбирають такими, щоб сприяти розвантаженню рівня 2 істим самим підтримувати стан інверсної заселеності атомів неону, тобто, щоб на рівні 3 було більше атомів, ніж на рівні 2.Принципіальна структурна схема газового лазера зображена на рисунку 1.2.'}
        </p>

        <div className="image-container">
          <img src={schemeImage} alt="Структурна схема газового лазера" />
          <p className="image-caption">{isEnglish ? 'Figure 1.2 - Block diagram of a gas laser' : 'Рисунок 1.2 - Структурна схема газового лазера'}</p>
        </div>

        <p>
          {isEnglish 
          ? 'The main structural element is a gas-filled discharge tube 1 with anode 2 and cathode 3, which are supplied with a high stabilized voltage from a power supply 4. To increase the radiation power, an optical resonator is used, consisting of flat 5 and spherical 6 mirrors with a multilayer dielectric coating. Reflecting from the mirrors and repeatedly passing along the tube axis, the photon stream on its way involves more and more neon atoms in the process of induced radiation, which leads to an increase in the intensity of the generated radiation.'
          : 'Основним конструктивним елементом є наповнена газовою сумішшю газорозрядна трубка 1 з анодом 2 і катодом 3, на які подається висока стабілізована напруга від блока живлення 4. Для збільшення потужності випромінювання використовується оптичний резонатор, який складається з плоского 5 і сферичного 6 дзеркал з багатошаровим діелектричним покриттям. Відбиваючись від дзеркал і багаторазово проходячи вздовж осі трубки, потік фотонів на своєму шляху втягує в процес індукованого випромінювання все більше атомів неону, що веде до зростання інтенсивності генерованого випромінювання.'}
        </p>
        
        <p>{isEnglish
          ? 'Due to the complex structure of energy levels 3 and 2 (the presence of sublevels), an excited neon atom emits several different wavelengths in the infrared and visible ranges. The multilayer structure of the mirrors provides the necessary reflection coefficient for one wavelength due to interference. This is also facilitated by the selection of the appropriate optical resonator length. Because of this, the laser radiation is monochromatic, i.e., a wave of a certain length is generated.The gas discharge tube 1 is closed at the ends (at both ends) by plane-parallel glass plates 7, which are installed at a Brewster angle to the tube axis, which creates conditions for complete polarization of the laser radiation.'
          : 'Через складну структуру енергетичних рівнів 3 і 2 (наявність підрівнів) збуджений атом неону випромінює декілька різних довжин хвиль в інфрачервоному та видимому діапазонах. Багатошарова структура дзеркал внаслідок інтерференції забезпечує необхідний коефіцієнт відбивання для однієї довжини хвилі. Цьому сприяє також підбір відповідної довжини оптичного резонатора. Через це випромінювання лазера монохроматичне, тобто генерується хвиля певної довжини.Газорозрядна трубка 1 закрита з торців (з двох кінців) плоскопаралельними скляними пластинками 7, які встановлені під кутом Брюстера до осі трубки, що створює умови для повної поляризації лазерного випромінювання.'}
        </p>

        <p>
          {isEnglish
          ? 'Thus, the induced laser radiation is characterized by a high degree of coherence, strict monochromaticity, sufficiently high power, full polarization, and narrow directionality.The laser beam is widely used as a scalpel, which has a number of advantages over the conventional one, namely: it allows for almost bloodless operations, ensures complete sterility, and improves the field of view for the surgeon. Laser eye microsurgery successfully treats glaucoma, cataracts, and retinal detachments. The laser scalpel is also used for surgical operations in urology, cardiology, dermatology, etc. The laser beam is also used for diagnostic purposes to obtain a three-dimensional image of the internal cavity of the stomach, for vascular endoscopy (angioscopy). The phenomenon of laser beam diffraction on a diffraction grating is used to determine the main characteristics of laser radiation - wavelength and quantum energy.'
          :'Таким чином, індуковане випромінювання лазера характеризується високим ступенем когерентності, строгою монохроматичністю, достатньо великою потужністю, повною поляризованістю, вузькою спрямованістю.Лазерний промінь широко використовується в ролі скальпеля, який мас цілий ряд переваг перед звичайним, а саме: дозволяє проводити майже безкровні операції, забезпечує повну стерильність, покращує поле зору для хірурга. Лазерна мікрохірургія ока успішно лікує глаукому, катаракту, відшарування сітківки. Лазерний скальпель використовується також для проведення хірургічних операцій з урології, кардіології, дерматології та ін. Застосовується лазерний промінь і з діагностичною метоюдля одержання об`ємного зображення внутрішньої порожнини шлунку, для судинної ендоскопії (ангіоскопії). Для визначення основних характеристик лазерного випромінювання - довжини хвилі та енергії кванта – використовується явище дифракції лазерного променя на дифракційній решітці.'}
        </p>

        <p>
          {isEnglish
          ? 'Diffraction grating. is a glass plate on which opaque strokes of width b are applied at regular intervals a. The spaces between the strokes are essentially transparent slits that transmit light. The total width of the stroke and slit is called the constant or period d of the diffraction grating, i.e. d= a+b. When the grating is illuminated with monochromatic light, which is a laser beam, a diffraction pattern is observed on the screen in the form of alternating dark and light areas. The light regions correspond to the main diffraction maxima 1, 2, etc., which exist under the condition of formula (1.1):'
          : 'Дифракційна решітка. являє собою скляну пластину, на якій через рівні проміжки a нанесені непрозорі штрихи шириною b. Проміжки між штрихами є по суті прозорими щілинами, які пропускають світло. Сумарна ширина штриха і щілини називається сталою або періодом d дифракційної решітки, тобто d= a+b. При освітленні решітки монохроматичним світлом, яким є лазерний промінь, на екрані спостерігається дифракційна картина. у вигляді темних 1 світлих областей, які чергуються. Світлі області відповідають головним дифракційним максимумам 1, 2 і т.д., що існують при умові формули (1.1):'}
        </p>

        <div className="formula-container">
          <Formula equation="d \sin \alpha = K \lambda" />
          <span className="formula-number">(1.1)</span>
        </div>

        <p>
          {isEnglish
          ? 'where K is the ordinal number of the maximum; λ is the light wavelength.'
          : 'де K – порядковий номер максимуму; λ – довжина світлової хвилі.'}
        </p>

        <p>
          {isEnglish
          ? 'The main maxima are located symmetrically on either side of the central or zero maximum (K=0, a=0). Knowing d, a, and K, we can determine the wavelength λ of the light incident on the diffraction grating by the formula (1.2):'
          : 'Головні максимуми розташовані симетрично по обидві сторони від центрального або нульового максимуму (K=0, a=0). Знаючи d, a і K, можна визначити довжину λ хвилі світла, яке падає на дифракційку решітку, за формулою (1.2):'}
        </p>

        <div className="formula-container">
          <Formula equation="\lambda = \frac{d \sin \alpha}{K}" />
          <span className="formula-number">(1.2)</span>
        </div>

        <p>   
          {isEnglish       
          ? 'To find the angle a at which the main maximum of the K-th order is visible, we use trigonometric concepts (Fig. 1.3).'
          : 'Для знаходження кута a, під яким видко головний максимум K - го порядку, скористаємося тригонометричними поняттями (рис. 1.3).'}
        </p>

        <div className="image-container">
          <img src={findAngle} alt="Знаходження кута a" />
          <p className="image-caption">{isEnglish ? 'Figure 1.3 - Finding the angle a' : 'Рисунок 1.3 - Знаходження кута a'}</p>
        </div>

        <p>
          {isEnglish
          ? 'It is obvious from Figure 1.3 that for the first maximum, the angle is determined by the formula (1.3):'
          : 'З рисунка 1.3 очевидно, що для першого максимуму кут знаходиться за формулою (1.3):'}
        </p>

        <div className="formula-container">
          <Formula equation="(t_{ga_1} = \frac{l_1}{R} = \frac{L_1}{2R})"/>
          <span className="formula-number">(1.3)</span>
        </div>

        <p>
          {isEnglish
          ? 'where R is the distance between the diffraction grating and the screen;'
          : 'де R – віддаль між дифракційною решіткою та екраном;'}
        </p>

        <p>
          {isEnglish
          ? 'L1 is the distance between the centers of the first-order maxima (1.4).'
          : 'L1 – віддаль між центрами максимумів першого порядку (1.4).'}
        </p>

        <div className="formula-container">
          <Formula equation="l_1 = l_2 = \frac{L_1}{2}" />
          <span className="formula-number">(1.4)</span>
        </div>

        <p>
          {isEnglish 
          ? 'It is possible to measure Lk between the centers of the maxima of other orders In general, we can write the formula (1.5):'
          : 'Можна виміряти Lk між центрами максимумів інших порядків В загальному випадку можна записати формулу (1.5):'}
        </p>

        <div className="formula-container">
          <Formula equation="t_{ga_K} = \frac{L_K}{2R}" />
          <span className="formula-number">(1.5)</span>
        </div>
        
        <p>
          {isEnglish
          ? 'Using the sine table (for small a, tga = sina), the value of sina is found from the experiments and used in formula (1.6). The energy of the laser radiation quantum is calculated by formula (1.6):'
          : 'За знайденим з дослідів tga за допомогою таблиці синусів (при малих a tga = sina) знаходиться значення sina, яке використовується у формулі (1.6). Енергія кванта лазерного випромінювання обчислюється за формулою (1.6):'}
        </p>

        <div className="formula-container">
          <Formula equation="\varepsilon = h\nu = \frac{hc}{\lambda}" />
          <span className="formula-number">(1.6)</span>
        </div>

        <p>
          {isEnglish
          ? 'where h is Planck`s constant; c is the speed of light in a vacuum.'
          : 'де h – постійна Планка; c – швидкість світла у вакуумі.'}
        </p>

        <p>
          {isEnglish
          ? 'The installation scheme is shown in Figure 1.4.'
          : 'Схема установки зображена на рисунку 1.4.'}
        </p>

        <div className="image-container">
          <img src={schemelaserImage} alt="Схема установки" />
          <p className="image-caption">{isEnglish ? 'Figure 1.4 - Installation scheme' : 'Рисунок 1.4 - Схема установки'}</p>
        </div>

        <p>
          {isEnglish
          ? 'The setup is mounted on an optical bench 1. A diffraction grating 3 is installed near the laser exit window 2. The resulting diffraction pattern is observed on a screen 4, which has a millimeter scale. The distance between the screen and the diffraction grating is measured using a ruler 5.'
          : 'Установка змонтована на оптичній лаві 1. Поблизу вихідного вікна 2 лазера встановлюється дифракційна решітка 3. Одержана дифракційна картина спостерігається на екрані 4, який має міліметрову шкалу. Вістань між екраном і дифракційною решіткою вимірюється за допомогою лінійки 5.'}
        </p>

        <h3>
          {isEnglish
          ? 'Read the theoretical information carefully. When you are ready to proceed to the next part of the test, click the “Go to the test” button. Good luck!'
          : 'Ретельно ознайомтесь з теоретичними відомостями. Коли будете готові перейти до наступної частини роботи, натисніть кнопку "Перейти до тестування. Успіхів!"'}
        </h3>

        <div className="buttontheory-container">
            <Link to="/testing">
              <button className="theory-button">
                {isEnglish ? 'Go to testing' : 'Перейти до тестування'}
              </button>
            </Link>
        </div>
    </div>
  );
};

export default TheoreticalPart;