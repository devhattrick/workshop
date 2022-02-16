import React from 'react'
import styles from './index.module.scss'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import {ButtonComponent} from '../../components'

interface Props {
  openModal: any
  setOpenModal?: any
  topic?: string
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const ModalAlert: React.FC<Props> = (props: Props): JSX.Element => {
  console.log(props.openModal)
  const handleClose=()=>{

  }

  return (
    <>
      <Modal
        open={props.openModal}
        onClose={() => props.setOpenModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.container}>
          <section className={styles.rowWrapper}>
            <p className={styles.textTopic}>{props.topic}</p>
            <AnnouncementIcon color='error' />
          </section>
          <section>
          <ButtonComponent  _text="ตกลง" _variant="contained" _colorBG="success" _colorText="white" _functionOnClick={()=>props.setOpenModal(false)}/>

          </section>
        </div>
      </Modal>
    </>


  )
}
export default ModalAlert