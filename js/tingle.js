const authorBtn = document.querySelector('#a-authors'),
      literatureBtn = document.querySelector('#a-literature'),
      glossaryBtn = document.querySelector('#a-glossary'),
      modal = document.querySelector('.modalMenu'),
      overlay = document.getElementById('overlay'),
      closeBtn = document.querySelector('.tingle-modal__close')


authorBtn.addEventListener('click', () => {
    overlay.classList.add('show')
    overlay.classList.remove('hide')

    modal.style.display = 'block'
    modal.innerHTML = `
        <div class="tingle-modal-box__content"><div id="authors">
        <p class="caption">Автор</p>
        <hr>
        <div class="row">
        <div class="col text-center">
            <p><strong class="name">Ақажанова Алмагүл Аманжолқызы</strong> – <i class="status"><i></i></i></p><i class="status"><i>
        </i></i></div><i class="status"><i>
        </i></i></div><i class="status"><i>
        </i></i></div><i class="status"><i>
        </i></i></div>
        `
})

literatureBtn.addEventListener('click', () => {
    overlay.classList.add('snow')
    overlay.classList.remove('hide')

    modal.style.display = 'block'
    modal.innerHTML = `
    <div id="literature">
    <p class="caption">Пайдалынған әдебиеттер</p>
    <hr>
    <div class="col list">
      <p><b>Негізгі:</b></p>
      <p>1. Ғ.К.Резуанова, А.А.Ақажанова. Қазақ тілі оқу-әдістемелік кешен.
      С.Сейфуллин атындағы ҚАТУ баспасы, Астана, 2017 ж.</p>
      <p>2. Ақпарат дереккөзі: <a href="https://massaget.kz/mangilik_el/shanyirak/salt-
      dastur/45734/">https://massaget.kz/mangilik_el/shanyirak/salt-
      dastur/45734/</a></p>
      <p>3. Бала тәрбиесіндегі отбасы дәстүрлерінің маңызы. <a href="http://startinfo.kz/buisness/bala-tarbiesi-
      otbacu/">http://startinfo.kz/buisness/bala-tarbiesi-
      otbacu/</a></p>
      <p>4. <a href="https://special-edu.kz/TEXTBOOKS/3RAZDEL/book/5.1.2/files/basic
      html/page225.html">https://special-edu.kz/TEXTBOOKS/3RAZDEL/book/5.1.2/files/basic
      html/page225.html</a></p>
      <p>5. <a href="https://bilimdiler.kz/kazakh_tili/7123-kazak-teatrlary.html">https://bilimdiler.kz/kazakh_tili/7123-kazak-teatrlary.html</a></p>
      <p>6. Қазақ тілі оқу құралы техникалық жоғары оқу орындарының студенттеріне
      арналған К.О.Жекеева – Алматы: АЭжБУ, 20149. – 85-б</p>
      <p>7. <a href="https://ust.kz/w ord/">https://ust.kz/w ord/</a></p>
      <p>8. Қ.Ж.Серғазина, Ж.А.Құсайынова. Қазақ тілі ОӘК«С.Сейфуллин атындағы
      Қазақ агротехникалық университеті» АҚ баспасы 2012 жыл</p>
      <p>9. <a href="http://www.altyn-orda.kz/">http://www.altyn-orda.kz/</a></p>
    </div>
  </div>
    `
})

glossaryBtn.addEventListener('click', () => {
    overlay.classList.add('show')
    overlay.classList.remove('hide')

    modal.style.display = 'block'
    modal.innerHTML = `
    <div id="json-glossary">
    <p class="caption">Глоссарий</p>
    <hr>
    
  </div>
    `
})

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('snow')
    overlay.classList.add('hide')

    modal.style.display = 'none'
    modal.innerHTML = ''
})
