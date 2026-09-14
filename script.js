(function(){
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------
     TRANSLATIONS
  --------------------------------------------- */
  var translations = {
    pt: {
      nav: { inicio:'inicio.md', sobre:'sobre.md', trajetoria:'trajetoria.md', skills:'skills.json', projetos:'projetos.md', contato:'contato.md' },
      hero: {
        kicker:'disponível para trainee / júnior',
        role:'desenvolvedor(nível: "júnior", stack: "web")',
        lede:'Formado em Análise e Desenvolvimento de Sistemas, de Natal/RN, construindo aplicações do front ao banco de dados. Do atendimento ao cliente para a lógica de programação — a mesma vontade de resolver problema, agora em código.',
        ctaProjects:'Ver projetos',
        ctaResume:'Baixar currículo'
      },
      code: { role:'papel', roleValue:'Desenvolvedor Júnior', city:'cidade', cityValue:'Natal, RN', available:'disponivel' },
      sobre: {
        title:'Sobre',
        p1:'Concluinte em Análise e Desenvolvimento de Sistemas pela UNINASSAU, com formação concluída em Informática e Sistemas e experiência real em desenvolvimento web — do HTML e CSS até integração com APIs e banco de dados.',
        p2:'Além da programação, passei os últimos anos em funções de suporte administrativo e atendimento ao cliente, o que me deu uma base sólida em organização, resolução de problemas e comunicação — habilidades que carrego para dentro de cada projeto que construo.',
        p3:'Hoje busco minha primeira oportunidade como Desenvolvedor Júnior ou Trainee, com vontade de aprender rápido, escrever código limpo e evoluir junto de um time.',
        labelFormacao:'formação', valueFormacao:'Análise e Desenvolvimento de Sistemas — UNINASSAU',
        labelLocal:'localização', valueLocal:'Natal, Rio Grande do Norte',
        labelFoco:'foco atual', valueFoco:'Desenvolvimento Web · Júnior / Trainee',
        labelStack:'stack principal'
      },
      trajetoria: {
        title:'Formação &amp; Experiência',
        item1:{ period:'Ago 2022 — Jul 2024', role:'Jovem Aprendiz Administrativo', bullets:['Suporte às rotinas administrativas','Organização de documentos e planilhas','Controle de dados e relatórios em Excel','Apoio à equipe operacional'] },
        item2:{ period:'2023 — 2026', role:'Análise e Desenvolvimento de Sistemas', bullets:['Formação em Informática e Sistemas','Base em lógica de programação, banco de dados e desenvolvimento web'] },
        item3:{ period:'Jul 2025 — Atual', role:'Expert em Interação IV', bullets:['Atendimento e suporte ao cliente','Resolução de problemas técnicos e operacionais'] }
      },
      skills: { title:'Habilidades', g1:'linguagens &amp; web', g2:'dados &amp; integrações', g3:'ferramentas' },
      projetos: {
        title:'Projetos',
        p1desc:'Aplicação web para organização e gerenciamento do tempo de estudo, desenvolvida com foco em produtividade e experiência do usuário.',
        p2desc:'Landing page responsiva com design moderno para apresentação de marca e produto, priorizando usabilidade e interface intuitiva.',
        p3desc:'Sistema de delivery com fluxo de pedidos, controle de restaurantes e gestão da experiência do cliente, incluindo manutenção e evolução contínua da plataforma.'
      },
      contato: {
        title:'Vamos conversar',
        intro:'Estou aberto a oportunidades como desenvolvedor júnior ou trainee. Se meu perfil combina com o que você procura, me chama em qualquer um dos canais abaixo.',
        email:'email', telefone:'telefone'
      },
      theme:{ dark:'modo escuro', light:'modo claro', aria:'Alternar entre tema claro e escuro' },
      footer:{
        tagline:'Construindo interfaces e sistemas com atenção aos detalhes, do primeiro commit ao deploy.',
        navTitle:'Navegação',
        contactTitle:'Contato',
        rights:'todos os direitos reservados',
        built:'Desenvolvido por mim :)',
        backToTop:'Voltar ao topo'
      },
      mobileAria:'Abrir menu de navegação'
    },
    en: {
      nav: { inicio:'home.md', sobre:'about.md', trajetoria:'journey.md', skills:'skills.json', projetos:'projects.md', contato:'contact.md' },
      hero: {
        kicker:'open to trainee / junior roles',
        role:'developer(level: "junior", stack: "web")',
        lede:'Graduated in Systems Analysis and Development, from Natal, Brazil, building applications from the front end to the database. From customer support to programming logic — the same drive to solve problems, now in code.',
        ctaProjects:'View projects',
        ctaResume:'Download resume'
      },
      code: { role:'role', roleValue:'Junior Developer', city:'city', cityValue:'Natal, Brazil', available:'available' },
      sobre: {
        title:'About',
        p1:'Graduate in Systems Analysis and Development at UNINASSAU, with a completed degree in Computing and Systems and real experience in web development — from HTML and CSS to API integration and databases.',
        p2:'Beyond programming, I spent the last few years in administrative support and customer service roles, which gave me a solid base in organization, problem-solving and communication — skills I bring into every project I build.',
        p3:'I\u2019m now looking for my first opportunity as a Junior Developer or Trainee, eager to learn fast, write clean code and grow alongside a team.',
        labelFormacao:'education', valueFormacao:'Systems Analysis and Development — UNINASSAU',
        labelLocal:'location', valueLocal:'Natal, Rio Grande do Norte, Brazil',
        labelFoco:'current focus', valueFoco:'Web Development · Junior / Trainee',
        labelStack:'core stack'
      },
      trajetoria: {
        title:'Education &amp; Experience',
        item1:{ period:'Aug 2022 — Jul 2024', role:'Administrative Apprentice', bullets:['Support for administrative routines','Document and spreadsheet organization','Data control and reporting in Excel','Support for the operations team'] },
        item2:{ period:'2023 — 2026', role:'Systems Analysis and Development', bullets:['Degree in Computing and Systems','Foundation in programming logic, databases and web development'] },
        item3:{ period:'Jul 2025 — Present', role:'Interaction Expert IV', bullets:['Customer service and support','Troubleshooting technical and operational issues'] }
      },
      skills: { title:'Skills', g1:'languages &amp; web', g2:'data &amp; integrations', g3:'tools' },
      projetos: {
        title:'Projects',
        p1desc:'Web application for organizing and managing study time, built with a focus on productivity and user experience.',
        p2desc:'Responsive landing page with modern design for a brand and product showcase, prioritizing usability and an intuitive interface.',
        p3desc:'Delivery system with order flow, restaurant management and customer experience handling, including ongoing platform maintenance and improvements.'
      },
      contato: {
        title:'Let\u2019s talk',
        intro:'I\u2019m open to opportunities as a junior developer or trainee. If my profile fits what you\u2019re looking for, reach out through any of the channels below.',
        email:'email', telefone:'phone'
      },
      theme:{ dark:'dark mode', light:'light mode', aria:'Toggle between light and dark theme' },
      footer:{
        tagline:'Building interfaces and systems with attention to detail, from the first commit to deploy.',
        navTitle:'Navigation',
        contactTitle:'Contact',
        rights:'all rights reserved',
        built:'Built by me :)',
        backToTop:'Back to top'
      },
      mobileAria:'Open navigation menu'
    }
  };

  function getPath(obj, path){
    return path.split('.').reduce(function(acc, key){ return (acc && acc[key] !== undefined) ? acc[key] : null; }, obj);
  }

  var currentLang = 'pt';
  try {
    var savedLang = localStorage.getItem('kaua-lang');
    if (savedLang === 'pt' || savedLang === 'en'){
      currentLang = savedLang;
    } else if (navigator.language && navigator.language.toLowerCase().indexOf('pt') !== 0){
      currentLang = 'en';
    }
  } catch(e){}

  var langButtons = document.querySelectorAll('.lang-btn');
  var themeToggle = document.getElementById('themeToggle');
  var toggleLabel = document.getElementById('toggleLabel');

  function applyLang(lang){
    currentLang = lang;
    var dict = translations[lang];
    root.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = getPath(dict, key);
      if (val !== null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function(el){
      var key = el.getAttribute('data-i18n-list');
      var arr = getPath(dict, key);
      if (Array.isArray(arr)){
        el.innerHTML = arr.map(function(item){ return '<li>' + item + '</li>'; }).join('');
      }
    });

    langButtons.forEach(function(btn){
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    var currentTheme = root.getAttribute('data-theme');
    toggleLabel.textContent = dict.theme[currentTheme];
    themeToggle.setAttribute('aria-label', dict.theme.aria);
    document.getElementById('mobileToggle').setAttribute('aria-label', dict.mobileAria);
    document.getElementById('backToTop').setAttribute('aria-label', dict.footer.backToTop);

    renderCodeWindow(lang);

    try { localStorage.setItem('kaua-lang', lang); } catch(e){}
  }

  langButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) applyLang(lang);
    });
  });

  /* ---------------------------------------------
     THEME
  --------------------------------------------- */
  var savedTheme = null;
  try { savedTheme = localStorage.getItem('kaua-theme'); } catch(e){}
  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  var initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initialTheme);

  themeToggle.addEventListener('click', function(){
    var current = root.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    toggleLabel.textContent = translations[currentLang].theme[next];
    try { localStorage.setItem('kaua-theme', next); } catch(e){}
  });

  /* ---------------------------------------------
     MOBILE NAV
  --------------------------------------------- */
  var mobileToggle = document.getElementById('mobileToggle');
  var nav = document.getElementById('nav');
  mobileToggle.addEventListener('click', function(){
    var isOpen = nav.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });
  nav.querySelectorAll('.nav-link').forEach(function(link){
    link.addEventListener('click', function(){ nav.classList.remove('open'); });
  });

  /* ---------------------------------------------
     SCROLLSPY
  --------------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('.section[id]'));

  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      var id = entry.target.getAttribute('id');
      var link = navLinks.find(function(l){ return l.dataset.section === id; });
      if (!link) return;
      if (entry.isIntersecting){
        navLinks.forEach(function(l){ l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(function(s){ spy.observe(s); });

  /* ---------------------------------------------
     SECTION REVEAL
  --------------------------------------------- */
  var reveal = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(function(s){
    if (!s.classList.contains('in-view')) reveal.observe(s);
  });

  /* ---------------------------------------------
     CLOCK
  --------------------------------------------- */
  var clockEl = document.getElementById('statusClock');
  function tick(){
    try{
      var now = new Date();
      var time = now.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit', timeZone:'America/Fortaleza' });
      clockEl.textContent = 'Natal, RN · ' + time;
    }catch(e){}
  }
  tick();
  setInterval(tick, 15000);

  /* ---------------------------------------------
     HERO CODE WINDOW
  --------------------------------------------- */
  var typeTarget = document.getElementById('typeTarget');
  var hasTypedOnce = false;

  function getCodeLines(lang){
    var d = translations[lang].code;
    return [
      [['tok-kw','const'],[' kaua = {\n']],
      [['tok-key','  ' + d.role],[': '],['tok-str','"' + d.roleValue + '"'],[',\n']],
      [['tok-key','  ' + d.city],[': '],['tok-str','"' + d.cityValue + '"'],[',\n']],
      [['tok-key','  stack'],[': ['],['tok-str','"HTML"'],[', '],['tok-str','"CSS"'],[', '],['tok-str','"JS"'],[', '],['tok-str','"Java"'],[', '],['tok-str','"SQL"'],['],\n']],
      [['tok-key','  ' + d.available],[': '],['tok-bool','true'],[',\n']],
      [['};']]
    ];
  }

  function renderStatic(codeLines){
    var html = '';
    codeLines.forEach(function(line, i){
      html += '<span class="ln">' + String(i+1).padStart(2,'0') + '</span>';
      line.forEach(function(part){
        if (Array.isArray(part) && part.length === 2 && typeof part[0] === 'string' && part[0].indexOf('tok-') === 0){
          html += '<span class="' + part[0] + '">' + part[1] + '</span>';
        } else {
          html += String(part).replace(/\n/g,'<br/>');
        }
      });
    });
    typeTarget.innerHTML = html;
    var cur = document.createElement('span');
    cur.className = 'code-cursor';
    typeTarget.appendChild(cur);
  }

  function typeAnimate(codeLines){
    var flat = [];
    codeLines.forEach(function(line, i){
      flat.push({ type:'ln', text: String(i+1).padStart(2,'0') });
      line.forEach(function(part){
        if (Array.isArray(part) && part.length === 2 && typeof part[0] === 'string' && part[0].indexOf('tok-') === 0){
          flat.push({ type:'tok', cls: part[0], text: part[1] });
        } else {
          flat.push({ type:'plain', text: String(part) });
        }
      });
    });

    typeTarget.innerHTML = '';
    var li = 0, ci = 0;
    var currentSpan = null;

    function step(){
      if (li >= flat.length){
        var cur = document.createElement('span');
        cur.className = 'code-cursor';
        typeTarget.appendChild(cur);
        return;
      }
      var token = flat[li];
      if (!currentSpan){
        if (token.type === 'ln'){
          currentSpan = document.createElement('span');
          currentSpan.className = 'ln';
          typeTarget.appendChild(currentSpan);
        } else if (token.type === 'tok'){
          currentSpan = document.createElement('span');
          currentSpan.className = token.cls;
          typeTarget.appendChild(currentSpan);
        } else {
          currentSpan = document.createTextNode('');
          typeTarget.appendChild(currentSpan);
        }
      }

      var text = token.text;
      if (ci < text.length){
        var ch = text.charAt(ci);
        if (currentSpan.nodeType === 3){
          currentSpan.textContent += (ch === '\n' ? '' : ch);
          if (ch === '\n') typeTarget.appendChild(document.createElement('br'));
        } else {
          currentSpan.innerHTML += (ch === '\n' ? '<br/>' : ch);
        }
        ci++;
        setTimeout(step, 10 + Math.random()*16);
      } else {
        li++; ci = 0; currentSpan = null;
        setTimeout(step, 4);
      }
    }
    step();
  }

  function renderCodeWindow(lang){
    var lines = getCodeLines(lang);
    if (!hasTypedOnce && !reduceMotion){
      hasTypedOnce = true;
      typeAnimate(lines);
    } else {
      renderStatic(lines);
    }
  }

  /* ---------------------------------------------
     BACK TO TOP
  --------------------------------------------- */
  var backToTop = document.getElementById('backToTop');
  var ticking = false;

  function updateBackToTop(){
    if (window.scrollY > window.innerHeight * 0.6){
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if (!ticking){
      window.requestAnimationFrame(updateBackToTop);
      ticking = true;
    }
  }, { passive: true });

  backToTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  updateBackToTop();

  /* ---------------------------------------------
     INIT
  --------------------------------------------- */
  applyLang(currentLang);

  /* ano */
  document.getElementById('year').textContent = new Date().getFullYear();

})();