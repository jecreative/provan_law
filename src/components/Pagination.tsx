import styled from 'styled-components'

const Pagination: React.FC<{
  postsPerSection: number
  totalPosts: number
  currentPosts: number
  paginate: any
}> = ({ postsPerSection, totalPosts, paginate, currentPosts }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerSection); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <li key={number} className='section-item'>
          <div
            onClick={() => paginate(number)}
            className={
              currentPosts === number ? 'paginate activePosts' : 'paginate'
            }
          >
            {number}
          </div>
        </li>
      ))}
    </>
  )
}

export default Pagination
