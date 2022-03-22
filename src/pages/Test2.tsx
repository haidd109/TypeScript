import React from 'react'

type Test2Props = {
    data: string
}

const Test2 = (props: Test2Props) => {
  return (
    <div>
        {props.data}
    </div>
  )
}

export default Test2