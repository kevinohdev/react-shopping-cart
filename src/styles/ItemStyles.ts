import styled from 'styled-components'

const ItemStyles = styled.div`

  .card {
    aspect-ratio: 1 / 1.3;
  }

  .stacked {
    display: grid;
  }

  .stacked > * {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  .lightbox {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;

    svg {
      color: transparent;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }


    .lightbox:hover {
      background-color: rgba(0, 0, 0, 0.5);

      svg {
        font-size: 3rem;
        color: white;
      }
    }

  img {
    max-width: 100%;
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 4px;
  }

  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    color: rgb(0, 0, 0);
    
    button {
      font-size: 1.7rem;
      background: transparent;
      border: none;
    }

    .mobile-add {
      color: rgb(0, 0, 0);

      @media (min-width: 600px) {
        display: none;
      }
  }

  }


`;

export default ItemStyles;