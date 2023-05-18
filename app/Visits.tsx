import { cookies } from 'next/headers';

async function updateCookie()
  {
      "use server"
      // get visits
      const visits = Number(cookies().get('visits')) || 0

      // @ts-expect-error
      cookies().set('visits', visits + 1)

      return Promise.resolve(visits)
  }

export default function Visits()
{
    return (
        <div className='flex flex-col items-center bg-white mt-6 p-6 text-black'>
            <div>
                <h2 className='text-2xl font-bold'>Visits</h2>
            </div>
            {updateCookie()}
        </div>
        )
}