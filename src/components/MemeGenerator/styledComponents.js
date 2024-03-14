import styled from 'styled-components'
export const MemeImageContainer = styled.div`
    width: 100%;
    max-width: 200px;
    min-height: 200px;
    background-size: cover;
    margin-top: 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-item:center;
    text-align:center;
    color:#ffff;
     `

export const MemeMainContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  `

export const MemeGeneratorContainer = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  padding: 30px;
`
export const MemeInputContainer = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 300px;
`
export const MemeMainHeading = styled.h1`
  color: #35469c;
  font-family: Roboto;
`
export const ImageLabel = styled.label`
  font-family: Roboto;
  font-size: 15px;
  color: #d7dfe9;
  font-weight: bold;
`
export const ImageInput = styled.input`
  width: 100%;
  padding: 7px 10px 7px 10px;
  border-radius: 5px;
  border-width: 1px;
  outline: none;
  margin-top: 5px;
  border-style: solid;
  border-color: #d7dfe9;
`
export const FontSelectInput = styled.select`
  width: 100%;
  padding: 7px 10px 7px 10px;
  border-radius: 5px;
  border-width: 1px;
  outline: none;
  margin-top: 5px;
  border-style: solid;
  border-color: #d7dfe9;
`
export const GenerateBtn = styled.button`
  background-color: #0b69ff;
  padding: 12px 5px 12px 5px;
  width: 100%;
  max-width: 50%;
  border-width: 0px;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  margin-top: 20px;
`
export const ImageInputContainer = styled.div`
  margin-bottom: 12px;
`
