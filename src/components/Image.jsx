import Input from '@/components/Input'

export default function Image (props) {
  const { src, alt, editable, onChange } = props

  return (
    <div>
      <img src={src} alt={alt} />
      {editable &&
        <Input
          onChange={onChange}
          type='file'
          accept='image/png, image/jpeg'
          label='Изменить'
        />}
    </div>
  )
}
