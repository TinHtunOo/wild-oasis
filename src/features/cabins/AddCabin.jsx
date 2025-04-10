import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {openModal && (
//         <Modal onClose={setOpenModal}>
//           <CreateCabinForm modalOn={openModal} onCloseModal={setOpenModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
