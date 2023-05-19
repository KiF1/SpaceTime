'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker(){
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>){
    const { files } = event.target;
    if(!files){
      return 
    }

    const previewUrl = URL.createObjectURL(files[0]);
    setPreview(previewUrl)
  }

  return (
    <>
      <input onChange={onFileSelected} name="coverUrl" accept="image/*" type="file" id="media" className="invisible h-0 w-0" />
      {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
    </>
  )
}