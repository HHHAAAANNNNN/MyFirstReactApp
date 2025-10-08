function Avatar({user, size = 100, borderRadius = '50%'}) {
    return (
      <img
        className="avatar"
        src={user.avatarUrl}
        alt={'Foto Profil ' + user.name}
        width={size}
        height={size}
        style={{ borderRadius }}
      />
    );
  }

export default Avatar;