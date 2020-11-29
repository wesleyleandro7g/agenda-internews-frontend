import React, { useRef, useState } from 'react'

import * as S from './styles'

const Search = ({ onChange }) => {
  const [searchClick, setSearchClick] = useState(false)
  const inputRef = useRef(null)

  function inputFocus() {
    setSearchClick(!searchClick)

    setTimeout(() => {
      inputRef.current.focus()
    }, 500)
  }

  function closeSearch() {
    setSearchClick(!searchClick)
  }

  return (
    <S.Container display={searchClick}>
      <S.RiSearchLine onClick={() => inputFocus()} />
      <S.Input display={searchClick} ref={inputRef} onChange={onChange} />
      <S.RiCloseLine display={searchClick} onClick={() => closeSearch()} />
    </S.Container>
  )
}

export default Search
