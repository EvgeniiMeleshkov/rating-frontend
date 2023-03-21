import Image from '@/components/Image'

export default
  <div>
    <h1>Welcome</h1>
    <Image
      src='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg'
      alt='test'
      editable
      onChange={console.log}
    />
  </div>
