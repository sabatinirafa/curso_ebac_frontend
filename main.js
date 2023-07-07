$('document').ready(() => {

  $('form').on('submit', (e) => {
    e.preventDefault()


    const toDo = $('#to-do').val()
    console.log(toDo)

    const list = $('#list')

    const li = $(`<li>${toDo}</li>`)

    li.click(function(){
      console.log($(this).attr('data-line'))
  
      if ($(this).attr('data-line') == 'true') {
        $(this).css('text-decoration', 'none')
        $(this).attr('data-line', 'false')
  
      } else {
        $(this).css('text-decoration', 'line-through')
        $(this).attr('data-line', 'true')
      }
    })

    li.appendTo(list)
  })
})