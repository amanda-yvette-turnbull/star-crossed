import { ChangeEvent, FormEvent } from 'react'
import { NewUser } from '../../models/Users'
// import { fetchStarSigns } from '../apis/starSigns'
// import { StarSign } from '../../models/StarSigns'

interface Props {
  newUser: NewUser
  formPage: number
  setNewUser: React.Dispatch<React.SetStateAction<NewUser>>
  setFormPage: React.Dispatch<React.SetStateAction<number>>
}

export default function FormTwo(props: Props) {
  //Get the right star sign with a thunk to tell the user what they are!

  function addPreferences(evt: FormEvent) {
    evt.preventDefault()
    console.log('click')
    setFormPage(formPage + 1)
  }

  function handleClick(evt: ChangeEvent<HTMLInputElement>) {
    const prefs = newUser.preference
    const { id } = evt.target
    if (prefs.find((pref) => pref === id) !== undefined) {
      const index = prefs.indexOf(id)
      prefs.splice(index)
    } else {
      prefs.push(id)
    }
    setNewUser({
      ...newUser,
      preference: prefs,
    })
    console.log(newUser)
  }
  const { newUser, setNewUser, formPage, setFormPage } = props
  return (
    <form onSubmit={addPreferences}>
      <h2>What kind of people would you like to meet?</h2>
      <div className="formCheckbox" key={'masc'}>
        <input
          type={'checkbox'}
          id={'masc'}
          name={'masc'}
          value={'masc'}
          onChange={handleClick}
        ></input>
        <label htmlFor={'masc'}>Mascs</label>
      </div>
      <div className="formCheckbox" key={'femme'}>
        <input
          type={'checkbox'}
          id={'femme'}
          name={'femme'}
          value={'femme'}
          onChange={handleClick}
        ></input>
        <label htmlFor={'femme'}>Femmes</label>
      </div>
      <div className="formCheckbox" key={'them'}>
        <input
          type={'checkbox'}
          id={'them'}
          name={'them'}
          value={'them'}
          onChange={handleClick}
        ></input>
        <label htmlFor={'them'}>Thems</label>
      </div>
      <button>Clicky</button>
    </form>
  )
}
