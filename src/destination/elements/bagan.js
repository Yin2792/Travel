import React from 'react'
export const Content = (props) => {
  const { title, paragraph, smallTitle} = props


  return (
    <div>
      <h2>{title}</h2>
      <div className="py-2"></div>
      <h5 className="text-justify ">{smallTitle}</h5>
      <p className="text-justify py-2">{paragraph}</p>
    </div>
  )
}
export const Image = (props) => {
   console.log(props)
  const {style}= props
  const userStyle= style === undefined?{}:style
  const defaultStyle = { transition: 'transform 0.3s ease-in-out', maxWidth: '100%' }
  return (

    <img src={require(`../images/${props.images}`)} className="img-fluid" style={{ ...defaultStyle,...userStyle}}/>
  )
}