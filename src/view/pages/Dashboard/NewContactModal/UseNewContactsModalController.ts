import { z } from 'zod';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { contactsService } from '../../../../app/services/contactsService';
import toast from 'react-hot-toast';

const schema = z.object({
  grupo: z.optional(z.string().max(1)),
  nome: z.string().min(1, 'Nome é obrigatório'),
  endereco: z.optional(z.string()),
  bairro: z.optional(z.string()),
  latitude: z.optional(z.string()),
  longitude: z.optional(z.string()),
  fone: z.optional(z.string()),
  whatsapp: z.boolean(),
  email: z.optional(z.string()),
  redeSocial: z.optional(z.string()).default('-'),
  obs: z.optional(z.string()),
  area: z.optional(z.string().max(1)),
  status: z.optional(z.string().max(1)),
});

type FormData = z.infer<typeof schema>;

export function UseNewContactsModalController() {
  const {
    isNewContactsModalOpen,
    closeNewContactsModal,
    showSocials,
    handleShowSocials,
    phone,
    handlePhone,
    handleResetPhone,
    handleResetShowSocials,
    checkedLocationBox,
    handleLocationCheckboxChange,
    handleResetLocationCheckbox,
  } = useDashboard();

  const {
    register,
    control,
    setValue,
    reset,
    resetField,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation(contactsService.create);

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        fone: data.fone?.replace(/\D/g, ''),
      });
      console.log(data);
      toast.success('Contato foi cadastrado com sucesso!');
      reset({
        nome: '',
        endereco: '',
        bairro: '',
        latitude: '',
        longitude: '',
        fone: '',
        whatsapp: false,
        email: '',
        redeSocial: '',
        obs: '',
        grupo: 'E',
        area: '0',
        status: 'S',
      });
      handleResetLocationCheckbox();
      handleResetPhone();
      handleResetShowSocials();
      closeNewContactsModal();
    } catch {
      toast.error('Erro ao cadastrar o contato!');
      // console.log(data);
    }
  });

  return {
    isNewContactsModalOpen,
    closeNewContactsModal,
    handleSubmit,
    register,
    errors,
    control,
    setValue,
    reset,
    isLoading,
    showSocials,
    handleShowSocials,
    phone,
    handlePhone,
    checkedLocationBox,
    handleLocationCheckboxChange,
    handleResetLocationCheckbox,
    handleResetPhone,
    handleResetShowSocials,
    resetField,
  };
}
