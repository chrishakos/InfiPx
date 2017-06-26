
export const signup = ( {user} ) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  });
};

export const login = ( {user} ) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const getUser = ( id ) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
}

export const addFollow = ( follow ) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: {follow: follow}
  });
};

export const deleteFollow = ( follow ) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${follow.id}`,
    data: { follow }
  });
};
