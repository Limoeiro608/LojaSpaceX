import ExampleComponent from '../../components/ExampleComponent';

const Home = () => {
  return (
    <>
      <header>
        <div className='Region col-12'>
        </div>
      </header>
      <main>
        <div className='Region col-12'>
						<ExampleComponent />
        </div>
      </main>
      <footer className='Region col-12'>
      </footer>
    </>
  )
}

export default Home
