import { Box, Button } from "@mui/material";
import TextInput from "../../app/shared/components/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editProfileSchema, type EditProfileSchema } from "../../lib/schemas/editProfileSchema";
import { useProfile } from "../../lib/hooks/useProfile";
import { useEffect } from "react";
import { useParams } from "react-router";

type Props = {
  setEditMode: (editMode: boolean) => void;
}

export default function ProfileEditForm({ setEditMode }: Props) {
  const { id } = useParams();
  const { editProfile, profile } = useProfile(id);
  const { control, handleSubmit, reset, formState: { isValid, isDirty } } = useForm<EditProfileSchema>({
    mode: 'onTouched',
    resolver: zodResolver(editProfileSchema)
  });

  const onSubmit = (data: EditProfileSchema) => {
    editProfile.mutate(data, {
      onSuccess() {
        setEditMode(false);
      }
    })
  }

  useEffect(() => {
    reset({
      displayName: profile?.displayName,
      bio: profile?.bio || ''
    });
  }, [profile, reset]);

  return (
    <Box component='form'
      onSubmit={handleSubmit(onSubmit)}
      display='flex'
      flexDirection='column'
      alignContent='center'
      gap={3}
      mt={3}
    >
      <TextInput label='Display Name' control={control} name='displayName' />

      <TextInput multiline rows={5}
        label='Add your bio' control={control} name='bio' />

      <Button
        type='submit'
        disabled={!isValid || !isDirty || editProfile.isPending}
        variant="contained"
        size="large"
      >
        Update Profile
      </Button>
    </Box>
  );
}