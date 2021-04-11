import React from "react"
import Modal from "react-modal"

Modal.setAppElement("#___gatsby")

function CategoryModal() {
  var subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333"
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <button
        onClick={openModal}
        className="relative flex flex-col items-center justify-center w-full h-full p-2 font-sans text-white duration-1000 transform bg-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        <svg
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
          className="inline-block w-6 h-6"
        >
          <path
            fill="#fff"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                      C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                      C15.952,9,16,9.447,16,10z"
          />
        </svg>
        Agregar
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2
          className="text-sm text-blue-500 uppercase"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Hello
        </h2>
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 w-6 h-6 m-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="text-gray-700 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="py-3 text-xl">Good modal</div>
      </Modal>
    </div>
  )
}

export default CategoryModal
