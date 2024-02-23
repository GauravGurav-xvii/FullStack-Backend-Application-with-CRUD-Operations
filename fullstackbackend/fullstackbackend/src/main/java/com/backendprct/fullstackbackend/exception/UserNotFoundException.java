package com.backendprct.fullstackbackend.exception;

@SuppressWarnings("serial")
public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException( Long id) {
		super("Could not found user with id "+id);
	}
}
