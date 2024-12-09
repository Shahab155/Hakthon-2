import React from 'react'
import Image from "next/image"

export default function SignUp() {
  return (
    <><hr />
    <main className='w-[90%] h-screen mt-10 '>
        <div className='w-[90%] h-[600px] border-2 border-red-600'>
           <div className='h-[600px] w-[800px] border-4 border-gray-800' >
            <div>
                <Image src={'/Images/signup.jpeg'} alt='' width={920} height={800}/>
            </div>
           </div>
        </div>
    </main>

    </>
  )
}
