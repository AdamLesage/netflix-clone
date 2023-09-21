<template>
  <div class="list-profiles-container">
    <div class="list-profiles">
      <div class="profile-gate-label">Qui est-ce ?</div>
      <div class="choose-profile">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },


};
</script>

<style>
  .list-profiles-container {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
  }

  .list-profiles {
    max-width: 80%;
  }

  .profile-gate-label {
    color: #fff;
    font-size: 3.5vw;
    font-weight: unset;
    width: 100%;
  }
</style>
