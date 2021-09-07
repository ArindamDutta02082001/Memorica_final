import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home () {
  const [Values, setValues] = useState({ n: '', m: '', n2: ' ' })
  const [id, id_from_server] = useState('')

  const [delid, rep_delid] = useState('')
  const [delres, setdelres] = useState('')

  const [editid, seteditid] = useState('')
  const [editname, seteditname] = useState('')
  const [editmem, seteditmem] = useState('')
  const [editmssg, seteditmssg] = useState('')

  //   ***********func to post**************
  async function posting_memory () {
    if (Values.n != '' && Values.n2 != '' && Values.m != '') {
      if (Values.n != Values.n2) {
        const res = await fetch('/mem_post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            n: Values.n,
            m: Values.m,
            n2: Values.n2
          })
        })
        const res_to_show = res.json()
        // console.log(res_to_show)
        res_to_show.then((ok) => { id_from_server(ok._id) }).catch((e) => { console.log(e) })
      } else {
        window.alert('your Original name and printed name must be different because of Security Reasons')
      }
 }
    else {
      window.alert('Fill the details')
    }
  }

  //   ***********func to delete mem**************

  async function deleting_memory () {
    if(delid !=''){
    const res = await fetch('/mem_post', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: delid
      })
    })
    const res_to_show_del = res.json()
    // console.log(res_to_show)
    res_to_show_del.then((ok) => { setdelres(ok.mssg) }).catch((e) => { setdelres('Invalid Id') })
  }else{
    window.alert("Fill the Id")
  }}

  //   ***********func to edit mem**************

  async function editing_memory () {
    if(editmem !='' && editid!='' && editname!=''){
    const res = await fetch('/mem_post', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: editid,
        new_name: editname,
        new_mem: editmem
      })
    })
    const res_to_show = res.json()
    // console.log(res_to_show)
    res_to_show.then((ok) => { seteditmem(ok.a)}).catch((e) => { seteditmssg('Invallid id')})
  }
else{
  window.alert("Fill the details Correctly")
}
}

  return (
    <div id='master_opera'>

      {/* **********post********* */}
      <div className='post'>
        <h1>Post Your Memories Here</h1>
        <input type='text' required='true' placeholder='Enter your Original Name' name='' id='' onChange={(e) => { setValues({ ...Values, n: e.target.value }) }} />
        <input type='text' required='true' placeholder='Enter your Memory' name='' id='mem_bara' onChange={(e) => { setValues({ ...Values, m: e.target.value }) }} />
        <input type='text' required='true' placeholder='Enter your Name to be printed on Memory' name='' id='' onChange={(e) => { setValues({ ...Values, n2: e.target.value }) }} />

        <input id='butt'
            type='button' onClick={() => {
             posting_memory()
           }} value='Share'
          />
        <h1  className='shake-horizontal'><Link id='lo' to='/showrec'>See The Collection</Link></h1>

        <input type='text' value='Your ID for this Memory is' id='onlyshow' disabled='true' />
        <span>{id}</span>

      </div>

      {/* **********delete************ */}
      <div className='post'>
        <h1>Wanna Delete Some of them ?</h1>

        <input type='text' placeholder='Enter memory id to be deleted' name='' id='' onChange={(e) => { rep_delid(e.target.value) }} />
        <input
id='butt'
          type='button' onClick={() => {
            deleting_memory()
          }} value='delete'
        />
        <span>{delres}</span>

        <Link id='lo' to='/id'>Don`t Know Your ID ? Click here</Link>

      </div>

      {/* **********Edit********** */}
      <div className='post'>
          <h1>Edit you Memories ...</h1>

          <input type='text' placeholder='Enter memory id to be edited' name='' id='' onChange={(e) => { seteditid(e.target.value) }} />

          <input type='text' placeholder='Enter your Name' name='' id='' onChange={(e) => { seteditname(e.target.value) }} />
          <input type='text' placeholder='Enter your Memory' name='' id='' onChange={(e) => { seteditmem(e.target.value) }} />

          <input
id='butt'
          type='button' onClick={() => {
            editing_memory()
          }} value='edit'
        />
        <span>{editmssg}</span>
          <Link id='lo' to='/id'>Don`t Know Your ID ? Click here</Link>

        </div>


    </div>
  )
}

export default Home
