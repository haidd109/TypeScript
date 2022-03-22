import React from 'react'


type TestProps = {
    data: string
    onID: (id: number) => void
}

const Test = (props: TestProps) => {
  return (
    <div>
        {props.data}
        <button onClick={() => props.onID(10)} ></button>
    </div>
  )
}

export default Test