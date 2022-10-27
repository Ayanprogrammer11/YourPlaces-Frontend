import React, { useCallback } from 'react'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import "./NewPlace.css"


const NewPlace = () => {

  const titleInputHandler = useCallback((id, value, isValid) => {}, [])
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, [])

  return (
    <form className='place-form'>

       <Input element="input" id="title" label="Title" errorText="Please enter a valid Title" validators={[VALIDATOR_REQUIRE()]} onInput={titleInputHandler} />

       <Input element="textarea" id="description" label="Description" errorText="Please enter a valid Description (atleast 5 characters)" validators={[VALIDATOR_MINLENGTH(5)]} onInput={descriptionInputHandler} />

    </form>
  )
}

export default NewPlace
