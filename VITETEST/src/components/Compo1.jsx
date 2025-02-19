import A2 from './Compo2'

export default function A1(props) {
  return (
    <>
      <div>A1</div>
      <A2 color={props.color} />
    </>
  )
}
